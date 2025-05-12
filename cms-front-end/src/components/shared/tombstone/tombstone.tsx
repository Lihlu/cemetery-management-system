import React from "react";

interface TombstoneProps {
  isReserved: boolean;
  isSelected: boolean;
  onClick: () => void;
}
const selectionStatus = (isSelected: boolean) => {
  const selectionColor = isSelected ? "#0000FF" : "#AAFF00  ";
  return selectionColor;
};

const Tombstone = ({ isReserved, isSelected, onClick }: TombstoneProps) => {
  const color = isReserved ? "#D3D3D3" : selectionStatus(isSelected);

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
