// https://api.open-meteo.com/v1/forecast?daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,precipitation_sum,apparent_temperature_min&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=Asia%2FSingapore&timeformat=unixtime&wind_speed_unit=mph&precipitation_unit=inch

import axios from "axios";

export function getWeather(lat, lon, timezone) {
    return axios.get(
        "https://api.open-meteo.com/v1/forecast?daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,precipitation_sum,apparent_temperature_min&hourly=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&timezone=Asia%2FSingapore&timeformat=unixtime&wind_speed_unit=mph&precipitation_unit=inch",
        {
            params: {
                latitude: lat,
                longitude: lon,
                // timezone
            }
        }
    )
    .then(({ data }) => {
        return {
            current: parseCurrentWeather(data),
            daily: parseDailyWeather(data),
            hourly: parseHourlyWeather(data)
        }
    })
}

const parseCurrentWeather = ({ current, daily }) => {
    const {
        apparent_temperature: currentTemp,
        wind_speed_10m: windSpeed,
        weather_code: iconCode,
      } = current;
    
      const {
        temperature_2m_max: [maxTemp],
        temperature_2m_min: [minTemp],
        apparent_temperature_max: [maxFeelsLike],
        apparent_temperature_min: [minFeelsLike],
        precipitation_sum: [precip]
      } = daily;
    
      return {
        currentTemp: Math.round(currentTemp),
        highTemp: Math.round(maxTemp),
        lowTemp: Math.round(minTemp),
        highFeelsLike: Math.round(maxFeelsLike),
        lowFeelsLike: Math.round(minFeelsLike),
        windSpeed: Math.round(windSpeed),
        precip: Math.round(precip * 100) / 100,
        iconCode,
      };
}

const parseDailyWeather = ({daily}) => {
    return daily.time.map((time, index)=>{
        return {
            timestamp: time * 1000, //api return sec, js aspected it in milisec
            iconCode: daily.weather_code[index],
            maxTemp: Math.round(daily.temperature_2m_max[index]),
        }
    })
}

const parseHourlyWeather = ({hourly, current})=>{
    return hourly.time.map((time, index)=>{
        return {
            timestamp : time*1000,
            iconCode: hourly.weather_code[index],
            temp: Math.round(hourly.temperature_2m[index]),
            feelsLike: Math.round(hourly.apparent_temperature[index]),
            windSpeed: Math.round(hourly.wind_speed_10m[index]),
            precip: Math.round(hourly.precipitation[index]*100)/100,
        }
    }).filter(({timestamp})=> timestamp >= current.time * 1000)
}
