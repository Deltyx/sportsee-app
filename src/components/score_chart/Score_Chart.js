import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis  } from 'recharts';
import PropTypes from 'prop-types';

import './Score_Chart.scss';

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
                data={this.props.data}
                startAngle={90} 
                endAngle={-270}
            >
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
            <RadialBar
                minAngle={15}
                background
                cornerRadius={25}
                barSize={10}
                dataKey="score"
                fill='#FF0000'
            />
            </RadialBarChart>
        </ResponsiveContainer>
        <div className="Score_Chart-score-wrapper">
            <p className="Score_Chart-score">{this.props.score}%</p>
            <p className="Score_Chart-score-text">de votre<br/>objectif</p>
        </div>
    </div>
    );
  }
}

Score_Chart.propTypes={
    data: PropTypes.array.isRequired,
    score: PropTypes.string.isRequired
}