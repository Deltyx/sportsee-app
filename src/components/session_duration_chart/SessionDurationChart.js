import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

import './SessionDurationChart.scss';

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

/**
  * Animate background format when moving the cursor on the chart line
  * @param {event} e - move of the mouse
  * @returns darker background from the pointed dot
*/
function customMouseMove(e){
  let sessionWrap = document.querySelector('.Session_Duration_Chart-wrapper');

  if (e.isTooltipActive) {
    let windowWidth = sessionWrap.offsetWidth;
    let mouseXpercent = Math.floor((e.activeCoordinate.x / windowWidth) * 100);
    sessionWrap.style.background = `linear-gradient(90deg, rgba(255,0,0, 1) ${mouseXpercent}%, rgba(0,0,0,0.1) ${mouseXpercent}%, rgba(0,0,0,0.1) 100%)`;
  } else {
    sessionWrap.style.background ='transparent'
  }
}

/**
  * Animate background format when moving the cursor out of a line dot
  * @param {event} e - move of the mouse
  * @returns initial background
*/
function customOnMouseOut(){
  let sessionWrap = document.querySelector('.Session_Duration_Chart-wrapper');
  sessionWrap.style.background ='transparent'
}

export default class SessionDurationChart extends PureComponent {
  render() {
    return (
      <div className='Session_Duration_Chart'>
        <div className='Session_Duration_Chart-wrapper'>
          <h2 className='Session_Duration_Chart-title'>Durée moyenne des sessions</h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={this.props.data}
              margin={{
                top:70,
                left:12,
                right:12,
                bottom:35
              }}
              onMouseMove={(e) => customMouseMove(e)}
              onMouseOut={() => customOnMouseOut()}
              >
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false}  
                tick={{fontSize: 12, fontWeight: 500}}
                tickMargin={40}
                stroke='rgba(255, 255, 255, 0.7)'
              />
              <YAxis hide='true' domain={['dataMin', 'dataMax']} />
              <Tooltip wrapperStyle={{outline: "none"}} content={<CustomToolTipSessionDuration />} cursor={false}/>
              <Line 
                dataKey='sessionLength' 
                type='natural' 
                stroke='#FFFFFF' 
                dot={false} 
                strokeWidth={1.5}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

SessionDurationChart.propTypes={
  data: PropTypes.array.isRequired,
}