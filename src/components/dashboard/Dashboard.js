import './Dashboard.scss';

import Sidebar from '../sidebar/Sidebar';
import Skills_Chart from '../skills_chart/Skills_Chart';
import Session_Duration_Chart from '../session_duration_chart/Session_Duration_Chart';
import Score_Chart from '../score_chart/Score_Chart';
import Activity_Chart from '../activity_chart/Activity_Chart';

const data = [
  {
    score: 80
  },
];

export default function Dashboard() {
  return (
    <section className='dashboard-container'>
      <Sidebar />
      <div className='dashboard-charts-container'>
        <Activity_Chart />
        <Session_Duration_Chart />
        <Skills_Chart />
        <Score_Chart data={data} score={data[0].score}/>
      </div>
    </section>
  );
}