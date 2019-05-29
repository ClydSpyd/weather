//inti weather object

const weather = new Weather(checkStorage())

const ui = new UI()



document.addEventListener('DOMContentLoaded', getWeather)





document.getElementById('w-change-btn').addEventListener('click', (e) =>{
  const cityInput = document.getElementById('city').value;

  weather.changeLocation(cityInput)

  getWeather();

  $('#locModal').modal('hide');
})


function getWeather(){

  // if (localStorage.getItem('city')!=null){
  //   city=localStorage.getItem('city')
  // }

  // weather.city='swindon'
  
  weather.getWeather()

  .then(results => {
    console.log(results)
    ui.paint(results)
  })
  .catch(err => console.log(err))
}



// function changeLocation(){weather.changeLocation()

// }

function checkStorage(){
  if (localStorage.getItem('city')!=null){
    city=localStorage.getItem('city')
  } else {
    city = 'Madrid'
  }

  return city
}