import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

import './Score_Chart.scss';

const data = [
  {
    score: 31.47,
    pv: 2400,
    fill: '#FF0000',
  },
];

export default class Score_Chart extends PureComponent {

  render() {
    return (
    <div className='Score_Chart-wrapper'>
        <h2 className='Score_Chart-title'>Score</h2>
        <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart 
                cx="50%" 
                cy="50%" 
                innerRadius="70%"  
                data={data}
                startAngle={90} 
                endAngle={450}
            >
            <RadialBar
                minAngle={15}
                background
                cornerRadius={25}
                barSize={8}
                dataKey="score"
            />
            </RadialBarChart>
        </ResponsiveContainer>
        <div className="Score_Chart-score-wrapper">
            <p className="Score_Chart-score">100%</p>
            <p className="Score_Chart-score-text">de votre<br/>objectif</p>
        </div>
    </div>
    );
  }
}
