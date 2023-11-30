import React, { useState, useContext, useEffect} from 'react'
import '@components/toggle/toggle.scss'
import { methodContext } from '@app'

function Toggle () {

    // Utilisation du context pour récupérer la méthode
    const { method, setMethod } = useContext(methodContext);

    const [isOn, setIsOn] = useState(false);

    const handleChange = () => {
        setIsOn(!isOn)
    }

    // Si l'état isOn est à true, on utilise l'API sinon on utilise le mock
    useEffect(() => {
        if (isOn) {
            setMethod('api');
        } else {
            setMethod('mock');
        }
    },[isOn])

    return (
        <div className={`toggle-container ${isOn ? 'checked' : ''}`}>
            <h2>{isOn ? 'API' : 'Mock'}</h2>
            <label className="toggle-button">
                <input type="checkbox" checked={isOn} onChange={handleChange} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default Toggle