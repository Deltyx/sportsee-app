import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import './Skills_Chart.scss';

const data = [
  {
    skill: 'Intensité',
    A: 120,
  },
  {
    skill: 'Vitesse',
    A: 98,
  },
  {
    skill: 'Force',
    A: 86,
  },
  {
    skill: 'Endurance',
    A: 99,
  },
  {
    skill: 'Energie',
    A: 85,
  },
  {
    skill: 'Cardio',
    A: 65,
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
              fullMark={200}
            />
            <Radar dataKey="A" stroke="#ff0101" fill="#ff0101" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
