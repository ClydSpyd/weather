class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-desc');
    this.temp = document.getElementById('w-temp');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.maxTemp = document.getElementById('w-max');
    this.minTemp = document.getElementById('w-min');
    this.astro = document.getElementById('astro');
    this.localTime = document.getElementById('localTime');
  }

  paint(weather){

    const time = new Date(weather.location.localtime);
    
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December']

    let timeFormated = `${days[time.getDay()]} ${time.getDate()}th ${months[time.getMonth()]} ${time.getHours()}:${time.getMinutes()}`// Saturday, September 17, 2016
    

    this.location.textContent = weather.location.name;
    this.localTime.textContent = `Local time : ${timeFormated}`
    this.description.textContent = weather.current.condition.text;
    this.temp.textContent = `${weather.current.temp_c.toFixed(1)}ºc`
    this.icon.src=weather.current.condition.icon
    this.maxTemp.textContent=`Max temp: ${weather.forecast.forecastday[0].day.maxtemp_c.toFixed(1)}`;
    this.minTemp.textContent=`Min temp: ${weather.forecast.forecastday[0].day.mintemp_c.toFixed(1)}`;
    this.humidity.textContent=`Feels like: ${weather.current.feelslike_c}º`
    this.astro.textContent=`sunrise: ${weather.forecast.forecastday[0].astro.sunrise}, sunset: ${weather.forecast.forecastday[0].astro.sunset} `
  }

}