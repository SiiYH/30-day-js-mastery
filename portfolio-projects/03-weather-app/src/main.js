import { getWeather } from "./weather";
import { ICON_MAP } from "./iconMap";
import "./style.css";

const positionSuccess = ({coords})=>{
    // getWeather(3.0439, 101.6201, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
getWeather(coords.latitude, coords.longitude, 'Asia/Singapore')
.then(renderWeather)
.catch(e=>{
    console.log(e);
    alert("Error getting weather");
})
}

const positionFailure = () => {
    alert("There was an error getting your location. Please allow us to use your location and refresh the page.");
}

navigator.geolocation.getCurrentPosition(positionSuccess, positionFailure);

function renderWeather ({current, daily, hourly}) {
    renderCurrentWeather(current);
    renderDailyWeather(daily);
    renderHourlyWeather(hourly);
    document.body.classList.remove("blurred");
}

const setValue = (selector, value, {parent = document} = {}) =>{
    parent.querySelector(`[data-${selector}]`).textContent = value;
}

const getIconUrl = (iconCode) =>{
    return `/Icons/${ICON_MAP.get(iconCode)}.svg`;
}

const currentIcon = document.querySelector("[data-current-icon]");

const renderCurrentWeather = (current) => {
    currentIcon.src = getIconUrl(current.iconCode);
    setValue("current-temp", current.currentTemp);
    setValue("current-high", current.highTemp);
    setValue("current-low", current.lowTemp);
    setValue("current-fl-high", current.highFeelsLike);
    setValue("current-fl-low", current.lowFeelsLike);
    setValue("current-wind", current.windSpeed);
    setValue("current-precip", current.precip);
}
const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, {weekday:"long"});
const dayCardTemplate = document.getElementById("day-card-template");
const dailySection = document.querySelector("[data-day-section]");
const renderDailyWeather = (daily) =>{
    dailySection.innerHTML = "";
    daily.forEach(day => {
        const element = dayCardTemplate.content.cloneNode(true);
        setValue("temp", day.maxTemp, {parent:element});
        setValue("date", DAY_FORMATTER.format(day.timestamp), {parent:element});
        element.querySelector("[data-icon]").src = getIconUrl(day.iconCode);
        dailySection.append(element);
    });
}

const HOUR_FORMATTER = new Intl.DateTimeFormat(undefined, {
    hour:"numeric",
    hour12: true,
});
const hourHourTemplate = document.getElementById("hour-row-template");
const hourlySection = document.querySelector("[data-hour-section]");
const renderHourlyWeather = (hourly) =>{
    hourlySection.innerHTML = "";
    hourly.forEach(hour => {
        const element = hourHourTemplate.content.cloneNode(true);
        setValue("temp", hour.temp, {parent:element});
        setValue("fl-temp", hour.feelsLike, {parent:element});
        setValue("wind", hour.windSpeed, {parent:element});
        setValue("precip", hour.precip, {parent:element});
        setValue("day", DAY_FORMATTER.format(hour.timestamp), {parent:element});
        setValue("time", HOUR_FORMATTER.format(hour.timestamp).toUpperCase(), {parent:element});
        element.querySelector("[data-icon]").src = getIconUrl(hour.iconCode);
        hourlySection.append(element);
    });
}