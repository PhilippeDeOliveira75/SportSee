import '@components/verticalNav/verticalNav.scss'
import yoga from '@assets/yoga.svg'
import natation from '@assets/natation.svg'
import cyclisme from '@assets/cyclisme.svg'
import musculation from '@assets/musculation.svg'


function VerticalNav () {
  return (
    <div className='vertical-nav'>
      <ul>
        <li><img src={yoga} alt='logo yoga'/></li>
        <li><img src={natation} alt='logo natation'/></li>
        <li><img src={cyclisme} alt='logo cyclisme'/></li>
        <li><img src={musculation} alt='logo musculation'/></li>
      </ul>
      <p className='copyright-txt'>Copiryght, SportSee 2020</p>
    </div>
  )
}

export default VerticalNav