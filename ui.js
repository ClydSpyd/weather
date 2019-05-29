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
    this.forecast1 = document.getElementById('forecast1');
    this.forecast2 = document.getElementById('forecast2');
    this.forecast3 = document.getElementById('forecast3');
    this.fImg1 = document.getElementById('foreImg1');
    this.fImg2 = document.getElementById('foreImg2');
    this.fImg3 = document.getElementById('foreImg3');
    this.foreInner1 = document.getElementById('foreInner1');
    this.foreInner2 = document.getElementById('foreInner2');
    this.foreInner3 = document.getElementById('foreInner3');
    this.foreFooter1 = document.getElementById('foreFooter1');
    this.foreFooter2 = document.getElementById('foreFooter2');
    this.foreFooter3 = document.getElementById('foreFooter3');
  }

  paint(weather){

    const time = new Date(weather.location.localtime);
    
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday','Monday','Tuesday'];
    const months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December']

    let timeFormated = `${days[time.getDay()]} ${time.getDate()}th ${months[time.getMonth()]} ${time.getHours()}:${time.getMinutes()}`// Saturday, September 17, 2016

    const f1 = days[time.getDay()+1]
    const f2 = days[time.getDay()+2]
    const f3 = days[time.getDay()+3]
    

    this.location.textContent = weather.location.name;
    this.localTime.textContent = `Local time: ${timeFormated}`
    this.description.textContent = weather.current.condition.text;
    this.temp.textContent = `${weather.current.temp_c.toFixed(1)}º`
    this.icon.src=weather.current.condition.icon
    this.maxTemp.textContent=`Max temp: ${weather.forecast.forecastday[0].day.maxtemp_c.toFixed(1)}º`;
    this.minTemp.textContent=`Min temp: ${weather.forecast.forecastday[0].day.mintemp_c.toFixed(1)}º`;
    this.humidity.textContent=`Feels like: ${weather.current.feelslike_c}º`
    this.astro.textContent=`sunrise: ${weather.forecast.forecastday[0].astro.sunrise}, sunset: ${weather.forecast.forecastday[0].astro.sunset} `
    this.forecast1.innerText=f1
    this.forecast2.innerText=f2
    this.forecast3.innerText=f3
    this.fImg1.src=weather.forecast.forecastday[1].day.condition.icon;
    this.fImg2.src=weather.forecast.forecastday[2].day.condition.icon;
    this.fImg3.src=weather.forecast.forecastday[3].day.condition.icon;
    this.foreInner1.innerText=weather.forecast.forecastday[1].day.condition.text;
    this.foreInner2.innerText=weather.forecast.forecastday[2].day.condition.text;
    this.foreInner3.innerText=weather.forecast.forecastday[3].day.condition.text;
    this.foreFooter1.innerText= `Min: ${weather.forecast.forecastday[1].day.mintemp_c}º / Max: ${weather.forecast.forecastday[1].day.maxtemp_c}º`
    this.foreFooter2.innerText= `Min: ${weather.forecast.forecastday[2].day.mintemp_c}º / Max: ${weather.forecast.forecastday[2].day.maxtemp_c}º`
    this.foreFooter3.innerText= `Min: ${weather.forecast.forecastday[3].day.mintemp_c}º / Max: ${weather.forecast.forecastday[3].day.maxtemp_c}º`
  }

}