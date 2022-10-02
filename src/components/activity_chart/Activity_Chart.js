import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './Activity_Chart.scss';

const data = [
  {
    day: '1',
    kilogram: 400,
    calories: 240,
  },
  {
    day: '2',
    kilogram: 300,
    calories: 130,
  },
  {
    day: '3',
    kilogram: 200,
    calories: 980,
  },
  {
    day: '4',
    kilogram: 278,
    calories: 390,
  },
  {
    day: '5',
    kilogram: 189,
    calories: 480,
  },
  {
    day: '6',
    kilogram: 239,
    calories: 380,
  },
  {
    day: '7',
    kilogram: 349,
    calories: 430,
  },
  {
    day: '8',
    kilogram: 349,
    calories: 430,
  },
  {
    day: '9',
    kilogram: 349,
    calories: 430,
  },
  {
    day: '10',
    kilogram: 349,
    calories: 430,
  },
];

function CustomToolTipActivityChart({payload, active}){
  if(active){
      return (
          <div className='Activity_Chart-tooltip'>
              <div>{`${payload[0].value}`}kg</div>
              <div>{`${payload[1].value}`}Kcal</div>
          </div>
      )
  }
  return null
}

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
                margin={{top: 90}}
                >
                <CartesianGrid vertical='false' strokeDasharray='3' height={1} horizontalPoints={[90, 185]} />
                <XAxis 
                  dataKey="day"  
                  interval='preserveStartEnd' 
                  tickSize='0' 
                  tickMargin='15' 
                />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" hide='true'/>
                <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    type='number'
                    stroke="#9B9EAC" 
                    axisLine={false}
                    domain={['dataMin -1', 'dataMax']} 
                    tickCount={3}
                    tickSize='0'
                    tickMargin='20'
                    width={55}
                />
                <Tooltip wrapperStyle={{outline: "none"}} content={<CustomToolTipActivityChart />} cursor={false}/>
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
