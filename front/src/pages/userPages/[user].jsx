import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import '@pages/userPages/userPage.scss'
import DataFormater from '@services/dataFormater'
import HorizontalNav from '@components/horizontalNav/horizontalNav'
import VerticalNav from '@components/verticalNav/verticalNav'
import Activity from '@components/activity/activity'
import Average from '@components/average/average'
import Performance from '@components/performance/performance'
import Score from '@components/score/score'
import Nutrient from '@components/nutrient/nutrient'


function User () {

  const { user } = useParams()  

  const [allDatas, setAllDatas] = useState(null);
    
  useEffect(() => {
    DataFormater(user)
      .then(data => {
        setAllDatas(data)
      })
  }, [user])

  const dataUser = allDatas && allDatas.user.data.data.userInfos

  const dataActivity = allDatas && allDatas.activity.data.data.sessions

  const dataAverage = allDatas && allDatas.averageSessions.data.data.sessions

  const dataPerformance = allDatas && allDatas.performance.data.data.data

  const dataScore = allDatas && allDatas.user.data.data.score

  const dataNutrient = allDatas && allDatas.user.data.data.keyData
  console.log(dataNutrient)

  return (
    <div className='w-horizontalnav-dashboard'>
      <HorizontalNav />
      <div className='dashboard-container'>
        <div className='vertical-bar-container'>
          <VerticalNav />
        </div>

        { allDatas && (

        <div className='w-title-graph-and-info'>
          <div className='dashboard-title'>
            <h2>Bonjour {dataUser.firstName} </h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>

          <div className='graph-and-info-container'>

            <div className='graph-container'>
              <div className='w-activity'>
                <Activity dataActivity = { dataActivity } />
              </div>

              <div className='w-average-intensity-score'>
                <Average dataAverage = { dataAverage } />
                <Performance dataPerformance = { dataPerformance } />
                <Score dataScore = { dataScore } />
              </div>
            </div>

            <div className='info-container'>
              <Nutrient dataNutrient = { dataNutrient } />
            </div>

          </div>
          
        </div>

        )}

      </div>
  </div>
  )
}

export default User