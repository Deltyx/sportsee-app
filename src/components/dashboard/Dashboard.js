import './Dashboard.scss';

import Sidebar from '../sidebar/Sidebar.js';
import Skills_Chart from '../skills_chart/Skills_Chart.js';
import Session_Duration_Chart from '../session_duration_chart/Session_Duration_Chart.js';
import Score_Chart from '../score_chart/Score_Chart';


export default function Dashboard() {
  return (
    <section className='dashboard-container'>
      <Sidebar />
      <div className='dashboard-charts-container'>
        <Session_Duration_Chart />
        <Skills_Chart />
        <Score_Chart />
      </div>
    </section>
  );
}