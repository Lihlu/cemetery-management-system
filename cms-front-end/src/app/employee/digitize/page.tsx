"use client";
import React, { useRef, useState } from "react";
import { Button, Space, Typography, Alert, Spin, Form } from "antd";
import { ReloadOutlined, SaveOutlined } from "@ant-design/icons";
import { formatTextractResponse } from "@/utils/textract-helpers";
import ExtractedTable from "@/components/employee/extracted-table/extracted-table";
import DocumentUploader from "@/components/employee/document-uploader/document-uploader";
import {
  useDeceasedPersonActions,
  useDeceasedPersonState,
} from "@/providers/deceased-person";
import { IDeceasedPerson } from "@/providers/deceased-person/context";
import { toast } from "@/providers/toast/toast";

const { Title } = Typography;

interface ParsedDataItem {
  key: string;
  [key: string]: string;
}

const DigitizePage = () => {
  const [file, setFile] = useState<File | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const [parsedData, setParsedData] = useState<ParsedDataItem[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [editingKey, setEditingKey] = useState("");
  const { createMultiple } = useDeceasedPersonActions();
  const { isPending, isSuccess } = useDeceasedPersonState();

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [form] = Form.useForm();

  const isEditing = (record: ParsedDataItem) => record.key === editingKey;

  const mapParsedToDeceased = (data: ParsedDataItem[]): IDeceasedPerson[] => {
    return data.map((item) => ({
      firstName: item["First Name"] || "",
      lastName: item["Last Name"] || "",
      idNumber: item["ID Number"] || "",
      dateOfBirth: item["DOB"] || "",
      dateOfDeath: item["DOD"] || "",
      dateOfFuneral: item["Date of Funeral"] || "",
      graveNumber: item["Grave Number"] || "",
      section: item["Section"] || "",
      isBuried: true,
      registeredBy: null,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleFileUpload = async () => {
    if (!file) {
      setError("Please select a file first");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      if (file.size <= 5 * 1024 * 1024) {
        const response = await fetch("/api/textract/sync", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to process document");
        }

        const lines = result.text
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean);
        const parsed = formatTextractResponse(lines);

        // Add keys to each row
        const dataWithKeys = (parsed?.table || []).map((item, index) => ({
          ...item,
          key: index.toString(),
        }));

        setParsedData(dataWithKeys);
      } else {
        const response = await fetch("/api/textract", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to process document");
        }

        setJobId(result.jobId);
        await pollForResults(result.jobId);
      }
    } catch (err) {
      setError(
        err.message || "An error occurred while processing the document"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const pollForResults = async (jobId) => {
    try {
      const response = await fetch(`/api/textract?jobId=${jobId}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to get results");
      }

      if (result.status === "completed") {
        const lines = result.text
          .split(/\r?\n/)
          .map((line) => line.trim())
          .filter(Boolean);
        const parsed = formatTextractResponse(lines);

        const dataWithKeys = (parsed?.table || []).map((item, index) => ({
          ...item,
          key: index.toString(),
        }));

        setParsedData(dataWithKeys);
        setJobId(null);
      } else {
        setTimeout(() => pollForResults(jobId), 2000);
      }
    } catch (err) {
      setError(err.message || "An error occurred while getting results");
      setJobId(null);
    }
  };

  const resetForm = () => {
    setFile(null);
    setParsedData(null);
    setJobId(null);
    setEditingKey("");
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const edit = (record: ParsedDataItem) => {
    form.setFieldsValue({ ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: string) => {
    try {
      const row = await form.validateFields();
      const newData = [...(parsedData || [])];
      const index = newData.findIndex((item) => item.key === key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setParsedData(newData);
        setEditingKey("");
      }
    } catch (error) {
      console.error("Validate Failed:", error);
      toast(`Failed to save changes`, "error");
    }
  };

  const saveAllEdits = async () => {
    if (!parsedData || isPending) return;

    try {
      const mappedRecords = mapParsedToDeceased(parsedData);
      await createMultiple(mappedRecords);
    } catch (error) {
      console.error("Failed to save records:", error);
    }
  };

  return (
    <div style={{ maxWidth: 960, margin: "auto", padding: 24 }}>
      <Title level={2}>Amazon Textract Document Processing</Title>

      <DocumentUploader
        onChange={handleFileChange}
        isLoading={isLoading}
        fileInputRef={fileInputRef}
      />

      <Space style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={handleFileUpload}
          disabled={!file || isLoading}
          loading={isLoading}
        >
          Extract Text
        </Button>
        <Button onClick={resetForm} icon={<ReloadOutlined />}>
          Reset
        </Button>
        {parsedData && (
          <Button
            type="primary"
            icon={<SaveOutlined />}
            onClick={saveAllEdits}
            loading={isPending}
            disabled={isPending}
          >
            {isPending ? "Saving..." : "Save All Edits"}
          </Button>
        )}
      </Space>

      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}

      {jobId && (
        <Alert
          message={`Processing document... (Job ID: ${jobId})`}
          type="info"
          showIcon
        />
      )}

      {parsedData && (
        <ExtractedTable
          parsedData={parsedData}
          form={form}
          isEditing={isEditing}
          save={save}
          cancel={cancel}
          edit={edit}
        />
      )}

      {isLoading && <Spin style={{ marginTop: 24 }} />}
      {isSuccess && (
        <Alert
          message="All records were saved successfully."
          type="success"
          showIcon
          style={{ marginBottom: 16 }}
        />
      )}
    </div>
  );
};

export default DigitizePage;
