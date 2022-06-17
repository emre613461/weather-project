import React from "react";
import { useWeather } from "../context/WeatherContext"

function Card() {
    const { weatherData, days, city } = useWeather();
    return (
        <div className="mt-5 py-5">
            <div className="container">
                <div className="row gy-3">
                    <h1 className="text-center text-warning">{city.name}</h1>
                    {weatherData && weatherData.map((item, key) => (
                        <div className="col-2">

                            <div className="card" key={key} >
                                <h2>{days[new Date(item.dt * 1000).getDay()]}</h2>
                                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} className="card-img-top" alt="..." />

                                <div className="card-body">
                                    <p className="card-text">{item.weather[0].description.toUpperCase()}</p>
                                    <h1>{Math.floor(item.temp.max)}°C</h1>
                                    <p>
                                        <span>{Math.floor(item.temp.min)}°C</span>/{""}
                                        <span>{Math.floor(item.temp.max)}°C</span>
                                    </p>
                                </div>
                            </div>


                        </div>
                    ))};
                </div>
            </div>
        </div>
    );
}

export default Card;