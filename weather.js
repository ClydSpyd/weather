class Weather{
  constructor(city){
    this.apiKey = '4f2a3b767477aa2b30a36a5747d59588';
    this.city=city;
    // this.country=country
  }
  /// fetch weather from API
  
  async getWeather(city){
    const response = await fetch (
      `http://api.apixu.com/v1/forecast.json?key=c9b1a9fe1cfe489b952184602192805&q=${this.city}`
    )
    const responseData = await response.json();
  
    return responseData;
  
  }


///change weather location
  changeLocation(city){
    this.city = city;
    localStorage.setItem('city',city)
  }
}




// `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`


'http://api.openweathermap.org/data/2.5/weather?q=madrid&APPID=4f2a3b767477aa2b30a36a5747d59588'