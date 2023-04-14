let apiKey = "faf3069d4928546472d6c4fe7cde6b6d";
let searchBtn = $("#searchBtn");
let citySearch = $(".form-control");

function searchcity () {
  let requestCurrent = "api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + apiKey;

  let showForecast = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + apiKey; //geocoding api in order to convert city or zip code to lat/long to fetch information in the forecast api//

  fetch(requestCurrent)
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    console.log(data)
    const forecastArray = sample.list.filter( (_dayObj, idx) => idx % 8 === 0)
    console.log(forecastArray)
  });
}


























$(searchBtn).on("click", function (e) {
  e.preventDefault()
  searchcity()
})



