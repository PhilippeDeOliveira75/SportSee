import HeaderHome from "@components/headerHome/headerHome"
import CardUser from "@components/cardUser/cardUser"

import '@pages/index/index.scss'

import Toggle from "../../components/toggle/toggle"


function Home () {


    return (
        <div>
            <HeaderHome />
            <div className="toggle-and-card-container">
                <Toggle />
                <h1>Choisissez un utilisateur</h1>
                <div className="card-container">
                    <CardUser />
                </div>
            </div>
        </div>
    )
}

export default Home