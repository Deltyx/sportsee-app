import './Dashboard.scss';

import Sidebar from '../sidebar/Sidebar';
import Skills_Chart from '../skills_chart/Skills_Chart';
import Session_Duration_Chart from '../session_duration_chart/Session_Duration_Chart';
import Score_Chart from '../score_chart/Score_Chart';
import Activity_Chart from '../activity_chart/Activity_Chart';
import Nutrition_Card from '../nutrition_card/Nutrition_Card';

import CaloriesIcon from '../../img/calories-icon.svg';
import CarbsIcon from '../../img/carbs-icon.svg';
import FatIcon from '../../img/fat-icon.svg';
import ProteinIcon from '../../img/protein-icon.svg';

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
      <aside className='nutrition_cards-wrapper'>
        <Nutrition_Card icon={CaloriesIcon} data='1,930kCal' id={1} type='Calories'/>
        <Nutrition_Card icon={ProteinIcon} data='155g' id={1} type='Protéines'/>
        <Nutrition_Card icon={CarbsIcon} data='290g' id={1} type='Glucides'/>
        <Nutrition_Card icon={FatIcon} data='50g' id={1} type='Lipides'/>
      </aside>
    </section>
  );
}