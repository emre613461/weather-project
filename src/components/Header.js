import React from "react";
import { useWeather } from "../context/WeatherContext";

function Header() {
    const { city, setCity, citiesJSON, day, todayDate } = useWeather();

    const changeCityName = (e) => {
        for (let i = 0; i < citiesJSON.length; i++) {
            if (e.target.value === citiesJSON[i].name) {
                setCity(citiesJSON[i]);
            }
        }
    };


    return (
        <div>
            <div className="header">
                <h1>Hava Durumu</h1>
                <div className=" d-flex justify-content-center  mx-auto mt-5">
                    <div className="me-4">
                        <select className="form-select mx-auto" name="cityname" id="cityname" value={city.name} onChange={changeCityName} >
                            {citiesJSON.map((item, key) => (
                                <option key={key} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h3><span>{todayDate}</span><br /><span>{day}</span></h3>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Header;