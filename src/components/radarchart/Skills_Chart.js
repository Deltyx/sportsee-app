import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import './Skills_Chart.scss';

const data = [
  {
    skill: 'Intensité',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    skill: 'Vitesse',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    skill: 'Force',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    skill: 'Endurance',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    skill: 'Energie',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    skill: 'Cardio',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export default class Skills_Chart extends PureComponent {
  render() {
    return (
      <div className='Skills_Chart-wrapper'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="65%" data={data}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis 
              dataKey="skill" 
              tickLine={false}
              tick={{ fontSize: 12 }} 
              stroke="#FFFFFF" 
            />
            <Radar name="Mike" dataKey="A" stroke="#ff0101" fill="#ff0101" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
