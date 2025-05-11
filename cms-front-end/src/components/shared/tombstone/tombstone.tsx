import React from "react";

interface TombstoneProps {
  x: number;
  y: number;
  status: "available" | "reserved" | "selected";
  onClick: () => void;
}

const Tombstone = ({ status, onClick }: TombstoneProps) => {
  const color =
    status === "available" ? "#666" : status === "reserved" ? "#222" : "red";

  return (
    <svg width="24" height="30" onClick={onClick} style={{ cursor: "pointer" }}>
      <path
        d="M 5 20 Q 5 5, 15 5 Q 25 5, 25 20 L 25 30 L 5 30 Z"
        fill={color}
        stroke="white"
        strokeWidth="1"
      />
    </svg>
  );
};

export default Tombstone;
