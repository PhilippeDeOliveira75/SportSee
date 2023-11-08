import HeaderHome from "@components/headerHome/headerHome"
import CardUserHome from "@components/cardUserHome/cardUserHome"
import '@pages/index.scss'

function Home () {
  return (
    <div>
      <HeaderHome />
      <div className="card-user-home-container">
        <CardUserHome />
      </div>
    </div>
  )
}

export default Home