import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

import './Skills_Chart.scss';

export default class Skills_Chart extends PureComponent {
  render() {
    return (
      <div className='Skills_Chart-wrapper'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="65%" data={this.props.data}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis 
              dataKey="kind" 
              tickLine={false}
              tick={{ fontSize: 12 }} 
              stroke="#FFFFFF" 
              fullMark={200}
            />
            <Radar dataKey="value" stroke="#ff0101" fill="#ff0101" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

Skills_Chart.propTypes={
  data: PropTypes.array.isRequired
}