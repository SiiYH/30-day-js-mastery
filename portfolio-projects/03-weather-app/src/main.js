import "./style.css";

import { getWeather } from "./weather";

// getWeather(3.0439, 101.6201, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
getWeather(3.0439, 101.6201, 'Asia/Singapore')
.then(
    data=>{
        console.log(data)
        // console.log(data.data)
    }
)