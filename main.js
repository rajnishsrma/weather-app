
const searchIn =  document.querySelector(".inp");
const reportElm =  document.querySelector(".report");

// global icon 
const clear_weather_icon = "https://cdn-icons-png.flaticon.com/512/1779/1779940.png" ;
const sunny_weather_icon = "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png";

const rainy_weather_icon = "https://e7.pngegg.com/pngimages/949/773/png-clipart-weather-free-content-storm-weather-symbol-s-weather-forecasting-logo.png" ;

searchIn.addEventListener("change", (event)=>{
    console.log(event.target.value);
    getWeather(event.target.value);
});


const getWeather = (city) => {
     //alert(city);
     reportElm.style.display = "flex" ;
     const API_KEY = "f33a484cf794d08d0148764789aaba32" ;
     const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
     
     // call Weather API
     fetch(API_URL)
     .then((res)=>{
        res.json()
        .then((data)=>{
            console.log(data);
            //let kelvinTemp = data.main.temp;
            let temp = data.main.temp ;
            console.log(temp.toFixed(2))
            document.querySelector(".deg").innerHTML= temp.toFixed(2);
            document.querySelector(".city").innerHTML= city;
            document.querySelector(".air_quality").innerHTML= data.weather[0].main;

            let imgElm = document.createElement("img");

            switch(data.weather[0].main){
                case "Clear" : {
                    imgElm.src = clear_weather_icon ;
                    break ;
                }
                case "Clouds" : {
                    imgElm.src = rainy_weather_icon ;
                    break ;
                }

                default : {
                    imgElm.src = sunny_weather_icon ;
                }


            }

            imgElm.classList.add("weather-logo-img")

            let weather_icon_elm = document.querySelector(".weather-logo");

            weather_icon_elm.appendChild(imgElm)

           //weather_icon_elm.innerHTML = imgElm ;

        })
     })
     .catch((err)=>{
        console.log("error" , err)
     })
}