import './Dashboard.scss';

import Sidebar from '../sidebar/Sidebar.js';
import Skills_Chart from '../radarchart/Skills_Chart.js';
import Session_Duration_Chart from '../linechart/Session_Duration_Chart.js';


export default function Dashboard() {
  return (
    <section className='dashboard-container'>
      <Sidebar />
      <div className='dashboard-charts-container'>
        <Session_Duration_Chart />
        <Skills_Chart />
      </div>
    </section>
  );
}