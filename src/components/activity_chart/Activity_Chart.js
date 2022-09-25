import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './Activity_Chart.scss';

const data = [
  {
    day: '1',
    kilogram: 4000,
    calories: 2400,
  },
  {
    day: '2',
    kilogram: 3000,
    calories: 1398,
  },
  {
    day: '3',
    kilogram: 2000,
    calories: 9800,
  },
  {
    day: '4',
    kilogram: 2780,
    calories: 3908,
  },
  {
    day: '5',
    kilogram: 1890,
    calories: 4800,
  },
  {
    day: '6',
    kilogram: 2390,
    calories: 3800,
  },
  {
    day: '7',
    kilogram: 3490,
    calories: 4300,
  },
  {
    day: '8',
    kilogram: 3490,
    calories: 4300,
  },
  {
    day: '9',
    kilogram: 3490,
    calories: 4300,
  },
  {
    day: '10',
    kilogram: 3490,
    calories: 4300,
  },
];

export default class Activity_Chart extends PureComponent {
  render() {
    return (
        <div className='Activity_Chart-wrapper'>
            <h2 className='Activity_Chart-title'>Activité quotidienne</h2>
            <div className='Activity_Chart-legend-wrapper'>
                <div className='black-dot'></div><h2>Poids (kg)</h2>
                <div className='red-dot'></div><h2>Calories brûlées (kCal)</h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                data={data}
                margin={{top: 60}}
                >
                <CartesianGrid vertical='false' strokeDasharray='3' height={1} horizontalPoints={[90, 185]} />
                <XAxis dataKey="day"  />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" hide='true'/>
                <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    stroke="#82ca9d" 
                    axisLine={false}
                    tickSize='0'
                    tickMargin='30'
                />
                <Tooltip />
                <Bar name='Poids (kg)' 
                    yAxisId="left" 
                    dataKey="kilogram" 
                    fill="#282d30" 
                    radius={[25, 25, 0, 0]} 
                    barSize={7}
                />
                <Bar name='Calories brûlées (kCal)'
                    yAxisId="right" 
                    dataKey="calories" 
                    fill="#ff0000"
                    radius={[25, 25, 0, 0]} 
                    barSize={7} 
                />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
  }
}
