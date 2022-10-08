import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

import './Activity_Chart.scss';

/**
  * Format Tooltip
  * @param {array} payload - source data
  * @param {boolean} active - is Tootip active
  * @returns the value when a column on the graph is pointed
*/

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
                data={this.props.data}
                margin={{top: 60}}
                >
                <CartesianGrid vertical='false' strokeDasharray='3' height={1} horizontalPoints={[60, 140]} />
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
                    domain={[0, 'auto']} 
                    tickCount={3}
                    tickSize='0'
                    tickMargin='15'
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

Activity_Chart.propTypes={
  data: PropTypes.array.isRequired
}