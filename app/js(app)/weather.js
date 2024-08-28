const API_KEY = "153c587127bf7688b78828b41ab23751";

function onGeoYes(Position){
  const lat = Position.coords.latitude; 
  const lng = Position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&unite=maetric`;
  fetch(url)
  .then(response => response.json())
  .then(date => {4
    const weatherContainer = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    city.innerText = date.name;
    weatherContainer.innerText = date.weather[0].main;
  });
}
function onGeoNo(){
 alert("no weather");
}

navigator.geolocation.getCurrentPosition(onGeoYes,onGeoNo);