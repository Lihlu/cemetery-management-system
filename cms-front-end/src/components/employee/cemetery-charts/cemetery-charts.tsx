import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer
} from 'recharts';
import { Card, Statistic, Row, Col } from 'antd';
import { ICemeterySection } from '@/providers/cemetery-section/context';

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
  '#8884D8', '#82CA9D', '#FFC658', '#FF6B6B',
  '#A569BD', '#5DADE2', '#48C9B0', '#F4D03F'
];

interface CemeteryChartsProps {
  sections: ICemeterySection[];
}

const CemeteryCharts: React.FC<CemeteryChartsProps> = ({ sections }) => {
  if (!sections || sections.length === 0) {
    return <div className="p-6 text-center text-gray-500">No section data available</div>;
  }

  const totalCapacity = sections.reduce((sum, s) => sum + s.totalCapacity, 0);
  const totalAvailable = sections.reduce((sum, s) => sum + s.numberOfAvailableSites, 0);
  const totalOccupied = totalCapacity - totalAvailable;
  const occupancyRate = totalCapacity ? Math.round((totalOccupied / totalCapacity) * 100) : 0;

  const occupancyData = [
    { name: 'Occupied', value: totalOccupied },
    { name: 'Available', value: totalAvailable }
  ];

  const sectionTypeDistribution = sections.reduce((result: Array<{ name: string; value: number }>, section) => {
    const existing = result.find(item => item.name === section.type);
    if (existing) {
      existing.value += 1;
    } else {
      result.push({ name: section.type, value: 1 });
    }
    return result;
  }, []);

  const capacityBySection = sections.map(section => ({
    name: section.name,
    Occupied: section.totalCapacity - section.numberOfAvailableSites,
    Available: section.numberOfAvailableSites
  }));

  return (
    <div className="p-4 space-y-6">
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic title="Total Capacity" value={totalCapacity} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Available Sites" value={totalAvailable} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Occupied Sites" value={totalOccupied} />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic title="Occupancy Rate" value={occupancyRate} suffix="%" />
          </Card>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Card title="Occupancy Distribution">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={occupancyData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {occupancyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Section Type Distribution">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sectionTypeDistribution}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {sectionTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>

      <Card title="Capacity by Section">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={capacityBySection} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Available" stackId="a" fill="#00C49F" />
            <Bar dataKey="Occupied" stackId="a" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default CemeteryCharts;