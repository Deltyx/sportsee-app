import './Dashboard.scss';

import Radarchart from './../radarchart/Radarchart.js';
import Linechart from '../linechart/Linechart.js';


export default function Dashboard() {
  return (
    <section className='dashboard-container'>
      <div className='linechart-section'>
        <Linechart />
      </div>
    </section>
  );
}