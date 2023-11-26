import React, { useState, useContext, useEffect} from 'react';
import '@components/toggle/toggle.scss';
import { methodContext } from '@main';

function Toggle () {

    const { method, setMethod } = useContext(methodContext);

    const [isOn, setIsOn] = useState(false);

    const handleChange = () => {
        setIsOn(!isOn);
    }

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