

import axios from 'axios';
import React, { useState } from 'react'

function Weather() {

    const [city, setCity] = useState('');
    const [displayData, setDisplayData] = useState('')

    const API_KEY = "68a1dc6f596b2bb1c797105a29e0c3e5";
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`


    async function generateWeather() {
        const result = await axios.get(BASE_URL, {
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric'
            }
        })
        console.log(result.data)
        setDisplayData(result.data)
    }

    return (
        <div className='container  m-4 p-4'>
            <form class="d-flex px-5" role="search">
                <input class="form-control me-2" type="search" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="button" onClick={generateWeather}>Get Weather</button>

            </form>

            {displayData && <div className='container p-5'>
                <img src={`https://openweathermap.org/img/wn/${displayData.weather[0].icon}@2x.png`} alt="" />
                <h3>Name : {displayData.name} </h3>
                <h5>Name : {displayData.main.temp} </h5>
            </div>}

        </div>
    )
}

export default Weather
