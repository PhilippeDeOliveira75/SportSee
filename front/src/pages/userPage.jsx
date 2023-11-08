import '@pages/userPage.scss'
import HorizontalNav from '@components/horizontalNav/horizontalNav'
import VerticalNav from '@components/verticalNav/verticalNav'
import Activity from '@components/activity/activity'
import Average from '@components/average/average'

function UserPage () {
  return (
    <div>
      <HorizontalNav />
      <VerticalNav />
      <div className='dashboard-container'>
        <div className='dashboard-title'>
          <h2>Bonjour </h2>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className='graph-and-info-container'>
          <div className='graph-container'>
            <div className='w-activity'>
              <Activity />
            </div>
            <div className='w-average-intensity-score'>
              <p>average</p>
            </div>
          </div>
          <div className='info-container'>
            <div className='info-card'>
              <p className='info-card-title'>Temps de jeu</p>
              <p className='info-card-content'>4h 32m</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPage