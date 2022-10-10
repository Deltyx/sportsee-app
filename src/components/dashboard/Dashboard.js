import './Dashboard.scss';

import Sidebar from '../sidebar/Sidebar';
import SkillsChart from '../skills_chart/SkillsChart';
import SessionDurationChart from '../session_duration_chart/SessionDurationChart';
import ScoreChart from '../score_chart/ScoreChart';
import ActivityChart from '../activity_chart/ActivityChart';
import NutritionCard from '../nutrition_card/NutritionCard';

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
        <ActivityChart data={activityData}/>
        <SessionDurationChart  data={sessionDurationData} />
        <SkillsChart data={dataReversed} />
        <ScoreChart 
          data={[{score: userInfo.score * 100}]} 
          score={(userInfo.score * 100).toString()}
        />
      <aside className='nutrition_cards-wrapper'>
        <NutritionCard 
          icon={CaloriesIcon} 
          data={userData.keyData.calorieCount + "kCal"} 
          id={userData.id} 
          type='Calories'
        />
        <NutritionCard 
          icon={ProteinIcon} 
          data={userData.keyData.proteinCount + "g"} 
          id={userData.id} 
          type='Protéines'
        />
        <NutritionCard 
          icon={CarbsIcon} 
          data={userData.keyData.carbohydrateCount + "g"} 
          id={userData.id} 
          type='Glucides'
        />
        <NutritionCard 
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