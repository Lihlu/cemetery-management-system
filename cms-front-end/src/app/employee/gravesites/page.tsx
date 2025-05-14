"use client";
import { useEffect } from "react";
import { Table, Spin } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useGravesiteActions, useGravesiteState } from "@/providers/gravesite";

export interface IGravesite {
  id: string;
  cemeterySectionId: string;
  siteNumber: string;
  isExtraDeep: boolean;
  graveType: string;
  row: number;
  column: number;
  isReserved: boolean;
  occupant1IdNumber: string;
  occupant2IdNumber: string;
  ownerId: number;
}

const GravesitesPage = () => {
  const { gravesiteList, isPending } = useGravesiteState();
  const { getAllGravesites } = useGravesiteActions();

  useEffect(() => {
    getAllGravesites(); 
  }, []);

  const columns: ColumnsType<IGravesite> = [
    {
      title: "Site Number",
      dataIndex: "siteNumber",
      key: "siteNumber",
    },
    {
      title: "Row",
      dataIndex: "row",
      key: "row",
    },
    {
      title: "Is Reserved",
      dataIndex: "isReserved",
      key: "isReserved",
      filters: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
      onFilter: (value, record) => record.isReserved === value,
      render: (val) => (val ? "Yes" : "No"),
    },
    {
      title: "Is Extra Deep",
      dataIndex: "isExtraDeep",
      key: "isExtraDeep",
      render: (val) => (val ? "Yes" : "No"),
    },
  ];
  

  return (
    <div>
      <h1>Gravesites</h1>
      {isPending ? (
        <Spin size="large" />
      ) : (
        <Table dataSource={gravesiteList} columns={columns} rowKey="id" />
      )}
    </div>
  );
};

export default GravesitesPage;

