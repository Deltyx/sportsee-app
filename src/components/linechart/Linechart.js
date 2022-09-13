import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'L',
    uv: 4000,
  },
  {
    name: 'M',
    uv: 3000,
  },
  {
    name: 'M',
    uv: 2000,
  },
  {
    name: 'J',
    uv: 2780,
  },
  {
    name: 'V',
    uv: 1890,
  },
  {
    name: 'S',
    uv: 2390,
  },
  {
    name: 'D',
    uv: 3490,
  },
];

export default class Linechart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="90%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
