// https://api.open-meteo.com/v1/forecast?daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,precipitation_sum,apparent_temperature_min&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto&timeformat=unixtime&wind_speed_unit=mph&precipitation_unit=inch

import axios from axios;

export function getWeather(lat, lon, timezone){
    axios.get(
        "https://api.open-meteo.com/v1/forecast?daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,precipitation_sum,apparent_temperature_min&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=auto&timeformat=unixtime&wind_speed_unit=mph&precipitation_unit=inch",
        {
            params:{
                latitude:lat,
                longitude: lon,
                timezone
            }
        }
    )
}