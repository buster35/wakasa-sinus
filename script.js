let apiKey = "6f86c92e5bf1e1464a6de7b897f7f7dd";
let searchBtn = document.getElementById("searchbtn");

function searchCity () { //working
  let citySearch = document.getElementById("input").value;
  let requestCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`;
  fetch(requestCurrent)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data) //returns an object; now that we have it, if we know how to access the object we can display that data//
    populateCurrent(data) //we will grab info and set it on page using this fn//
  });
}

function fiveDay (data) {
  let lat = data.coord.lat
  let lon = data.coord.lon
  let showForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`; //geocoding api in order to convert city or zip code to lat/long to fetch information in the forecast api;https://openweathermap.org/api/geocoding-api//
  fetch(showForecast)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data) //i have data, this is where the function comes in//
  });
}

function populateCurrent (data) { 
  let cityTitle = document.querySelectorAll(".card-title");
  for (let i = 0; i < cityTitle.length; i++) { //populates all city names on page//
    cityTitle[i].innerHTML = data.name
  }
  temperatureConverter(data)
  document.getElementById("wind").innerHTML = Math.round(data.wind.speed) + "mph";
  document.getElementById("humidity").innerHTML = data.main.humidity + "%";
  fiveDay(data)
}

function temperatureConverter(data) { 
  let kelvin = data.main.temp
  kelvin = parseFloat(kelvin);
  document.getElementById("fahrenheit").innerHTML=Math.round(((kelvin-273.15)*1.8))+32; //kelvin -> fahrenheit temp converter found on W3 Schools//
}

// function populateForecast (data) {

// }






//i want to be able to create variables for each of the divs i want to add text to

// const forecastArray = sample.list.filter( (_dayObj, idx) => idx % 8 === 0) //this awesome line of code provided by our instructor to help 
// console.log(forecastArray)










searchBtn.addEventListener("click", function (e) {
  e.preventDefault()
  searchCity()
  // fiveDay()
})



