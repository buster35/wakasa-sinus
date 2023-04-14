let apiKey = "faf3069d4928546472d6c4fe7cde6b6d";
let searchBtn = $("#searchBtn");
let citySearch = $(".form-control");

function searchcity () {
  let requestCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + apiKey;
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
    console.log(data)
  });
}

// const forecastArray = sample.list.filter( (_dayObj, idx) => idx % 8 === 0) //this awesome line of code provided by our instructor to help 
//     console.log(forecastArray)
























$(searchBtn).on("click", function (e) {
  e.preventDefault()
  searchcity()
})



