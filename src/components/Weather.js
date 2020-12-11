import React, { useState } from 'react'
import axios from 'axios'

import WeatherResult from './WeatherResult'


function Weather(){
    //Todo verify zip is actually a zip
    const[zip, setZip] = useState('');
    const[weather, setWeather] = useState(null)
    //conditionally render a weather result compnent

    const handleSubmit = (e) => {
        e.preventDefault();
        let url =`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`
        axios.get(url)
        .then(result => {
            //set sum state
            setWeather(result.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
              <h1>Find weather in your area in the United Sates</h1> 
              {weather ? <WeatherResult weather={weather} /> : null}
               <label htmlFor ='zip'>Zipcode: </label>
               <input type="text" name="zip" id="zip" onChange={e => setZip(e.target.value) }/> 
               <input type="submit" value="Find weather"/>
            </form>

        </div>
    )
}

export default Weather;