import '@components/CardUser/CardUser.scss';
import { NavLink } from "react-router-dom";



function CardUser() {

  return (
    <>
      <NavLink to={'/userPages/12'} >
        <div className='w-card-user-home'>
          <p className='card-user-home-title'>1</p>
        </div>
      </NavLink>
      <NavLink to={'/userPages/18'} >
        <div className='w-card-user-home'>
          <p className='card-user-home-title'>2</p>
        </div>
      </NavLink>
    </>
  )
}

export default CardUser