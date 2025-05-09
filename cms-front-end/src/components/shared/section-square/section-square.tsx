"use client";

import React from "react";

interface SectionSquareProps {
  name: string;
}

const SectionSquare: React.FC<SectionSquareProps> = ({ name }) => {
  return (
    <div className="w-32 h-32 bg-gray-100 border border-gray-400 flex items-center justify-center text-xl font-semibold rounded-md shadow-sm">
      {name}
    </div>
  );
};

export default SectionSquare;
