/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, Sector } from 'recharts';

export default function StatisticGraph({ monthExpenses, budgetLimit }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const data = [
    { label: `Budget ${budgetLimit}`, value: budgetLimit - monthExpenses },
    { label: `Expenses ${monthExpenses}`, value: monthExpenses },
  ];

  const COLORS = [
    { start: '#7F5FC3', end: '#E1D3FF' },
    { start: '#43277C', end: '#43277C' },
  ];

  const onLegendEnter = (o) => {
    const idx = data.findIndex((v) => v.label === o.value);
    setActiveIdx(idx);
  };

  const onPieEnter = (_, index) => {
    setActiveIdx(index);
  };

  const onPieExit = () => {
    setActiveIdx(0);
  };

  const renderActiveShape = (props) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
    } = props;

    return (
      <g>
        <text x={cx} y={cy} textAnchor="middle">
          {(percent * 100).toFixed(0)}%
        </text>
        <text x={cx} y={cy} dy={25} textAnchor="middle" fill="#7F5FC3">
          {payload.label}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius - 5}
          outerRadius={outerRadius + 5}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <PieChart
      width={420}
      height={240}
      style={{ marginLeft: '100px', marginBottom: '30px', marginTop: '30px' }}
    >
      <defs>
        {data.map((d, index) => (
          <linearGradient key={d.label} id={`myGradient${index}`}>
            <stop offset="0%" stopColor={COLORS[index].start} />
            <stop offset="100%" stopColor={COLORS[index].end} />
          </linearGradient>
        ))}
      </defs>
      <Pie
        activeIndex={activeIdx}
        activeShape={renderActiveShape}
        data={data}
        cx={110}
        cy={115}
        innerRadius={80}
        outerRadius={110}
        paddingAngle={2}
        dataKey="value"
        nameKey="label"
        onMouseEnter={onPieEnter}
        onMouseLeave={onPieExit}
        startAngle={450}
        endAngle={90}
      >
        {data.map((d, index) => (
          <Cell key={d.label} fill={`url(#myGradient${index})`} />
        ))}
      </Pie>
      <Legend
        wrapperStyle={{ color: '#fff', left: -80, bottom: -30 }}
        onMouseEnter={onLegendEnter}
        onMouseLeave={onPieExit}
      />
    </PieChart>
  );
}
