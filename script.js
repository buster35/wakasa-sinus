let apiKey = "6f86c92e5bf1e1464a6de7b897f7f7dd";
let searchBtn = document.getElementById("searchbtn");
let citySearch = document.querySelector(".form-control");

function searchcity () {
  let requestCurrent = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`;
  fetch(requestCurrent)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
  });
}

function fiveDay () {
  let showForecast = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + apiKey; //geocoding api in order to convert city or zip code to lat/long to fetch information in the forecast api;https://openweathermap.org/api/geocoding-api//
  fetch(showForecast)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data) //data we're getting from open weather 5/day
  });
}


//first, lets get the first fetch function to work
//i want to be able to create variables for each of the divs i want to add text to

// const forecastArray = sample.list.filter( (_dayObj, idx) => idx % 8 === 0) //this awesome line of code provided by our instructor to help 
// console.log(forecastArray)
























searchBtn.addEventListener("click", function (e) {
  e.preventDefault()
  searchcity()
})



