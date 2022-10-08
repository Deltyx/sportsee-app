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

import {getAPIUserDataMain, getAPIUserDataActivity, getAPIUserDataAverage, getAPIUserDataPerformance} from '../../services/fetch'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { performanceDataFormatter, sessionDurationDataFormatter, activityDataFormatter } from '../../services/dataFormatter';
import { userInfoBuilder } from '../../services/userInfoBuilder';
import Title from '../title/Title';

export default function Dashboard() {

  const {userId} = useParams()

  const [userData, setUserData] = useState()
  const [userActivity, setUserActivity] = useState()
  const [userSessionDuration, setUserSessionDuration] = useState()
  const [userPerformance, setUserPerformance] = useState()

  useEffect(() => {
    getAPIUserDataMain(userId)
        .then(data => setUserData(data))

    getAPIUserDataActivity(userId)
        .then((data) => setUserActivity(data))

    getAPIUserDataAverage(userId)
        .then((data) => setUserSessionDuration(data))

    getAPIUserDataPerformance(userId)
        .then((data) => setUserPerformance(data))
  }, [userId])

  if((!userData) || (!userActivity) || (!userSessionDuration) || (!userPerformance)){
    return null
  }

  const dataReversed = performanceDataFormatter(userPerformance.data)
  const sessionDurationData = sessionDurationDataFormatter(userSessionDuration.sessions)
  const activityData = activityDataFormatter(userActivity.sessions)
  const userInfo = new userInfoBuilder()
                  .setId(userData.id)
                  .setUserInfos(userData.userInfos)
                  .setScore(userData.todayScore || userData.score)
                  .setKeyData(userData.keyData)
                  .build()
  return (
    <section className='dashboard-container'>
      <Sidebar />
      <div className='dashboard-charts-container'>
        <Title firstName={userInfo.userInfos.firstName}/>
        <Activity_Chart data={activityData}/>
        <Session_Duration_Chart  data={sessionDurationData} />
        <Skills_Chart data={dataReversed} />
        <Score_Chart 
          data={[{score: userInfo.score * 100}]} 
          score={(userInfo.score * 100).toString()}
        />
      <aside className='nutrition_cards-wrapper'>
        <Nutrition_Card 
          icon={CaloriesIcon} 
          data={userData.keyData.calorieCount + "kCal"} 
          id={userData.id} 
          type='Calories'
        />
        <Nutrition_Card 
          icon={ProteinIcon} 
          data={userData.keyData.proteinCount + "g"} 
          id={userData.id} 
          type='Protéines'
        />
        <Nutrition_Card 
          icon={CarbsIcon} 
          data={userData.keyData.carbohydrateCount + "g"} 
          id={userData.id} 
          type='Glucides'
        />
        <Nutrition_Card 
          icon={FatIcon} 
          data={userData.keyData.lipidCount + "g"} 
          id={userData.id} 
          type='Lipides'
        />
      </aside>
      </div>
    </section>
  );
}