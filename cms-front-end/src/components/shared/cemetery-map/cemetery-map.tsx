"use client";

import { ICemeterySection } from "@/providers/cemetery-section/context";
import React from "react";
import { useRouter } from "next/navigation";
import { useCemeterySectionActions } from "@/providers/cemetery-section";

// SVG section paths
const sectionToPath: Record<string, string> = {
  Alpine: "M50 50 H250 V250 H50 Z",
  Briarwood: "M270 50 H470 V250 H270 Z",
  Cypress: "M490 50 H650 V250 H490 Z",
  Dovefield: "M50 270 H450 V370 H50 Z",
  Evergreen: "M470 270 H650 V370 H470 Z",
  Fernridge: "M50 390 H450 V530 L370 610 H50 Z",
  Gardenia: "M470 390 H650 V530 H470 Z",
};

const sectionLabelPositions: Record<string, { x: number; y: number }> = {
  Alpine: { x: 150, y: 150 },
  Briarwood: { x: 370, y: 150 },
  Cypress: { x: 570, y: 150 },
  Dovefield: { x: 250, y: 320 },
  Evergreen: { x: 560, y: 320 },
  Fernridge: { x: 250, y: 500 },
  Gardenia: { x: 560, y: 470 },
};

interface CemeteryMapProps {
  sections: ICemeterySection[];
}

const CemeteryMap: React.FC<CemeteryMapProps> = ({ sections }) => {
  const { setSelectedSection } = useCemeterySectionActions();
  const router = useRouter();

  const handleClick = (section: ICemeterySection) => {
    setSelectedSection(section);
    router.push("/public-user/section");
  };

  return (
    <svg
      viewBox="0 0 700 700"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {sections.map((section) => {
        const { x, y } = sectionLabelPositions[section.name];

        return (
          <g key={section.name}>
            <path
              d={sectionToPath[section.name]}
              onClick={() => handleClick(section)}
              className="cursor-pointer transition-colors duration-200 hover:fill-[#1D2D44]"
              fill="transparent"
              stroke="#1D2D44"
              strokeWidth="2"
            />
            <text
              x={x}
              y={y - 12}
              textAnchor="middle"
              className="pointer-events-none select-none"
              fill="#1D2D44"
              fontSize="14"
              fontWeight="bold"
            >
              {section.name}
            </text>
            <text
              x={x}
              y={y + 4}
              textAnchor="middle"
              className="pointer-events-none select-none"
              fill="#1D2D44"
              fontSize="12"
              fontStyle="italic"
            >
              {section.type}
            </text>
            <text
              x={x}
              y={y + 20}
              textAnchor="middle"
              className="pointer-events-none select-none"
              fill="#1D2D44"
              fontSize="12"
            >
              Available sites: {section.numberOfAvailableSites}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default CemeteryMap;
