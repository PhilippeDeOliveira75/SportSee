import logo from '@assets/logo.svg'
import '@components/horizontalNav/horizontalNav.scss'

function HorizontalNav () {
  return (
    <>
        <div className="horizontal-nav-container">
            <img className="logo" src={logo} alt="logo SportSee" />
            <nav className="horizontal-nav">
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Profil</a></li>
                    <li><a href="#">Réglage</a></li>
                    <li><a href="#">Communauté</a></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default HorizontalNav