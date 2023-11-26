import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import '@pages/userPages/userPage.scss'

import DataFormater from '@services/dataFormater'
import { methodContext } from '@main'

import HorizontalNav from '@components/horizontalNav/horizontalNav'
import VerticalNav from '@components/verticalNav/verticalNav'
import Activity from '@components/activity/activity'
import Average from '@components/average/average'
import Performance from '@components/performance/performance'
import Score from '@components/score/score'
import Nutrient from '@components/nutrient/nutrient'


function User () {

  const method = useContext(methodContext)
  console.log(method);

  const { user } = useParams()

  const [allDatas, setAllDatas] = useState(null);

  useEffect(() => {
    DataFormater(user).then(data => {
      console.log(data);
      setAllDatas(data);
    });
  }, []) 



    

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
            <h2>Bonjour {allDatas.dataUser.firstName} </h2>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>

          <div className='graph-and-info-container'>

            <div className='graph-container'>
              <div className='w-activity'>
                <Activity dataActivity = { allDatas.dataActivity } />
              </div>

              <div className='w-average-intensity-score'>
                <Average dataAverage = { allDatas.dataAverage } />
                <Performance dataPerformance = { allDatas.dataPerformance } />
                <Score dataScore = { allDatas.dataScore } />
              </div>
            </div>

            <div className='info-container'>
              <Nutrient dataNutrient = { allDatas.dataNutrient } />
            </div>

          </div>
          
        </div>

        )}

      </div>
  </div>
  )
}

export default User