const Api_KeyWeather = "1fd7f629e337342e9dba8d26de8108f8";

document.querySelector(".search-bar").addEventListener("keyup",(event)=>{
    if(event.key == "Enter"){
        fetchdata(buscador());
    }
})

const buscador = ()=>{
    return document.querySelector(".search-bar").value;
};
document.querySelector(".search button").addEventListener("click",()=>{
    fetchdata(buscador());
    console.log(buscador());
})

const fetchdata= (lugarsearch)=>{
    //const {latitude,longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${lugarsearch}&appid=${Api_KeyWeather}&lang=es&units=metric`)
    .then(Response => Response.json())
    .then(data => setWeatherData(data));
};

const setWeatherData = data =>{
    console.log(data);
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    
    document.getElementById("ciudad").innerHTML = "Clima en "+name;
    document.getElementById("icon").src =  `https://openweathermap.org/img/wn/${icon}.png`;
    document.getElementById("description").innerHTML = description;
    document.getElementById("temperatura").innerHTML = `${temp} °C `;
    document.getElementById("humidity").innerHTML = `Humedad: ${humidity}%`;
    document.getElementById("vientos").innerText = `Viento: ${speed} km/h`;
}


