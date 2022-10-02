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

import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../data/mockedData.js';
import {getAPIUserDataMain, getAPIUserDataActivity, getAPIUserDataAverage, getAPIUserDataPerformance} from '../../services/fetch'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { performanceDataFormatter } from '../../services/dataFormatter';

export default function Dashboard() {

  const {userId} = useParams()

  const [userData, setUserData] = useState()
  const [userActivity, setUserActivity] = useState()
  const [userSessionDuration, setUserSessionDuration] = useState()
  const [userPerformance, setUserPerformance] = useState()

  let datasMocked = true

  useEffect(() => {
    if(datasMocked === true){
      const userDatas = USER_MAIN_DATA
      const UserActivities = USER_ACTIVITY
      const userSessionDurations = USER_AVERAGE_SESSIONS
      const userPerformances = USER_PERFORMANCE

      const currentUserData = userDatas.find(userData => (userData.id).toString() === userId)
      const currentUserActivity = UserActivities.find(userActivity => (userActivity.userId).toString() === userId)
      const currentUserSessionDuration = userSessionDurations.find(userSessionDuration => (userSessionDuration.userId).toString() === userId)
      const currentUserPerformance = userPerformances.find(userPerformance => (userPerformance.userId).toString() === userId)

      setUserData(currentUserData)
      setUserActivity(currentUserActivity)
      setUserSessionDuration(currentUserSessionDuration)
      setUserPerformance(currentUserPerformance)
    }
    else{
      getAPIUserDataMain(userId)
          .then(data => setUserData(data))

      getAPIUserDataActivity(userId)
          .then((data) => setUserActivity(data))

      getAPIUserDataAverage(userId)
          .then((data) => setUserSessionDuration(data))
  
      getAPIUserDataPerformance(userId)
          .then((data) => setUserPerformance(data))
    }
  }, [userId, datasMocked])

  if((!userData) || (!userActivity) || (!userSessionDuration) || (!userPerformance)){
    return null
  }

const dataReversed = performanceDataFormatter(userPerformance.data)


  return (
    <section className='dashboard-container'>
      <Sidebar />
      <div className='dashboard-charts-container'>
        <Activity_Chart />
        <Session_Duration_Chart />
        <Skills_Chart data={dataReversed} />
        <Score_Chart data={[{score: userData.todayScore * 100}]} score={(userData.todayScore * 100).toString()}/>
      </div>
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
    </section>
  );
}