"use client";
import { Table, Form, Button, Popconfirm, Typography, Input } from "antd";
import EditableCell from "../editable-cell/editable-cell";

const { Title } = Typography;

const ExtractedTable = ({
  parsedData,
  form,
  isEditing,
  save,
  cancel,
  edit,
}) => {
  const columns =
    parsedData && parsedData.length > 0
      ? Object.keys(parsedData[0])
          .filter((key) => key !== "key")
          .map((key) => ({
            title: key,
            dataIndex: key,
            key,
            editable: true,
            render: (text, record) =>
              isEditing(record) ? (
                <Form.Item
                  name={key}
                  style={{ margin: 0 }}
                  rules={[{ required: true, message: `Please input ${key}!` }]}
                >
                  <Input />
                </Form.Item>
              ) : (
                text
              ),
          }))
      : [];

  if (columns.length > 0) {
    columns.push({
      title: "Action",
      key: "action",
      dataIndex: "action",
      editable: false,
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Button
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
              type="primary"
              size="small"
            >
              Save
            </Button>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <Button size="small">Cancel</Button>
            </Popconfirm>
          </span>
        ) : (
          <Button
            disabled={isEditing(record)}
            onClick={() => edit(record)}
            size="small"
          >
            Edit
          </Button>
        );
      },
    });
  }

  const mergedColumns = columns.map((col) => {
    if (!col.editable) return col;
    return {
      ...col,
      onCell: (record) => ({
        record,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Title level={4}>Extracted Data (Click Edit to modify a row)</Title>
      <Form form={form} component={false}>
        <Table
          components={{ body: { cell: EditableCell } }}
          dataSource={parsedData}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{ onChange: cancel }}
          size="small"
          bordered
          scroll={{ x: "max-content" }}
        />
      </Form>
    </>
  );
};

export default ExtractedTable;
