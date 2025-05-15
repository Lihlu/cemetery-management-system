"use client";
import React from "react";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const DocumentUploader: React.FC<Props> = ({
  onChange,
  isLoading,
  fileInputRef,
}) => (
  <div style={{ marginBottom: 16 }}>
    <label style={{ fontWeight: 600, display: "block", marginBottom: 8 }}>
      Upload Document
    </label>
    <input
      type="file"
      ref={fileInputRef}
      onChange={onChange}
      accept="image/jpeg,image/png,application/pdf"
      disabled={isLoading}
      style={{
        display: "block",
        width: "100%",
        padding: 8,
        border: "1px solid #d9d9d9",
        borderRadius: 4,
      }}
    />
    <small style={{ color: "#888" }}>
      Supported formats: JPEG, PNG, PDF (up to 500MB)
    </small>
  </div>
);

export default DocumentUploader;
