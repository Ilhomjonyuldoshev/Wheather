const city = document.querySelector(".search")
const date = document.querySelector(".date")
const deg = document.querySelector(".deg")
const wheathernow = document.querySelector(".wheathernow")
const wheathertoday = document.querySelector(".wheathertoday")
const cityNow=document.querySelector(".city-now")
const kelvin = 273;
const btn = document.querySelector(".btn")
const sup =document.querySelector(".sup")
const wrap=document.querySelector(".wrapper")



const key = "a8d162eb4147ade0b71f7c5210cbc2a6";
async function set() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}`
    let response = await fetch(url)
    let responseDat = await response.json();
    console.log(responseDat);
    cityNow.innerText=`${responseDat.name}, ${responseDat.sys.country}`
    deg.innerText= Math.floor(responseDat.main.temp - kelvin) + "°C";
    wheathernow.innerHTML=responseDat.weather[0].main
    wheathertoday.querySelector(".min").innerHTML=Math.floor(responseDat.main.temp_min - kelvin) + "°C";
    wheathertoday.querySelector(".max").innerHTML=Math.floor(responseDat.main.temp_max - kelvin) + "°C";
    
    let clearURl="https://i.pinimg.com/564x/91/38/8a/91388a972c0e27d64365b7384433ed6c.jpg"
    let snowUrl="https://i.pinimg.com/564x/cc/5f/8f/cc5f8f34f7d2f58a810875e112d13505.jpg"
    let rainUrl="https://i.pinimg.com/564x/01/8c/f1/018cf17afd9c8542611e520fa9d8705a.jpg"
    let cloudsUrl="https://i.pinimg.com/736x/a5/31/3c/a5313c2f4ca086ef412ce538d95e796b.jpg"

    
    if (responseDat.weather[0].main=="Clear") {
        wrap.setAttribute("style",`background-image: url(${clearURl});`)
    }
    else if (responseDat.weather[0].main=="Snow") {
        wrap.setAttribute("style",`background-image: url(${snowUrl});`)
    }
    else if (responseDat.weather[0].main=="Rain") {
        wrap.setAttribute("style",`background-image: url(${rainUrl});`)
    }
    else if (responseDat.weather[0].main=="Clouds") {
        wrap.setAttribute("style",`background-image: url(${cloudsUrl});`)
    }
    else{
        wrap.setAttribute("style",`background-image: url("./tabiat.jfif");`)
    }






    function sana() {
        let san = new Date()
        let day = san.getUTCDate()
        let mont = san.getUTCMonth()
        let year = san.getUTCFullYear()
    
        if (mont===0) {
            mont="Yanvar"
        }
        if (mont===1) {
            mont="Fevral"
        }
        if (mont===2) {
            mont="Mart"
        }
        if (mont===3) {
            mont="Aprel"
        }
        if (mont===4) {
            mont="May"
        }
        if (mont===5) {
            mont="Iyun"
        }
        if (mont===6) {
            mont="iyul"
        }
        if (mont===7) {
            mont="Avgust"
        }
        if (mont===8) {
            mont="Sentyabr"
        }
        if (mont===9) {
            mont="Oktyabr"
        }
        if (mont===10) {
            mont="Noyabr"
        }
        if (mont===11) {
            mont="Dekabr"
        }
    
    
        
        date.querySelector(".day").textContent = day
        date.querySelector(".month").textContent = mont
        date.querySelector(".year").textContent = year
    
    }
    setInterval(sana, 1000)
}


