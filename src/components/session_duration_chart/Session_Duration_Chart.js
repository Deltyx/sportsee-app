import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

import './Session_Duration_Chart.scss';

const data = [
  {
    day: 'L',
    sessionLength: 4000,
  },
  {
    day: 'M',
    sessionLength: 3000,
  },
  {
    day: 'M',
    sessionLength: 2000,
  },
  {
    day: 'J',
    sessionLength: 2780,
  },
  {
    day: 'V',
    sessionLength: 1890,
  },
  {
    day: 'S',
    sessionLength: 2390,
  },
  {
    day: 'D',
    sessionLength: 3490,
  },
];

/**
  * Format Tooltip
  * @param {array} payload - source data
  * @param {boolean} active - is Tootip active
  * @returns the value when a dot on the line is pointed
*/

function CustomToolTipSessionDuration({payload, active}){
  if(active){
      return (
          <div className='Session_Duration_Chart-tooltip'>
              <div>{`${payload[0].value}`}min</div>
          </div>
      )
  }
  return null
}

export default class Session_Duration_Chart extends PureComponent {
  render() {
    return (
      <div className='Session_Duration_Chart-wrapper'>
        <h2 className='Session_Duration_Chart-title'>Durée moyenne des sessions</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top:80,
              right:12,
              left:12,
              bottom:35
          }}
          >
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false}  
              tick={{fontSize: 12, fontWeight: 500}}
              tickMargin={40}
              stroke='rgba(255, 255, 255, 0.5)' 
            />
            <YAxis hide='true' domain={['dataMin', 'dataMax']} />
            <Tooltip content={<CustomToolTipSessionDuration />} cursor={false}/>
            <Line 
              dataKey='sessionLength' 
              type='natural' 
              stroke='#FFFFFF' 
              dot={false} 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
