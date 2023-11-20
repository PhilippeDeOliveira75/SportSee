import HeaderHome from "@components/headerHome/headerHome"
import CardUser from "@components/cardUser/cardUser"
import '@pages/index.scss'
import DataFormater from "@services/dataFormater"

function Home () {

	DataFormater()
	
  return (
    <div>
      <HeaderHome />
      <div className="card-user-home-container">
        <CardUser />
      </div>
    </div>
  )
}

export default Home