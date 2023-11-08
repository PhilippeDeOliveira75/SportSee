import '@components/headerHome/headerHome.scss'
import logo from '@assets/logo.svg'

function HeaderHome () {
    return (
      <header className='header-home'>
          <img src={logo} alt='logo sportsee'/>
      </header>
    )
  }

export default HeaderHome