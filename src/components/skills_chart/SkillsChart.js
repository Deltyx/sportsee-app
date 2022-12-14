import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

import './SkillsChart.scss';

export default class SkillsChart extends PureComponent {
  render() {
    return (
      <div className='Skills_Chart-wrapper'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart outerRadius="60%" data={this.props.data}>
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

SkillsChart.propTypes={
  data: PropTypes.array.isRequired
}