// let sunriseElement;
// let sunsetElement;
// let minutesLeftElement;
// let locationElement;
// let sunElement;
// let timeLeftElement;
// let totalTime = 0;
let totalTimems = 0;
timeout = 60000;

// PLACE SUN ON LEFT AND BOTTOM POSITION
// BASED ON TOTAL TIME AND CURRENT TIME
// const placeSun = (sunrise) => {
// 	const now = new Date();
// 	const sunriseDate = new Date(sunrise * 1000);

// 	const minutesLeft =
// 	now.getHours() * 60 +
// 	now.getMinutes() -
// 	(sunriseDate.getHours() * 60 + sunriseDate.getMinutes());

// 	const percentage = (100/(totalTime.getHours() * 60 / totalTime.getMinutes())) * minutesLeft;
// 	const sunLeftPosition = 50;
// 	const sunBottomPosition = 50;

// 	sunElement.style.left = `${sunLeftPosition}%`;
// 	sunElement.style.bottom = `${sunBottomPosition}%`;
// }

const updateTimeAndTimeLeft = (sunset) => {
  // sunElement.dataSet.time = new Date().toLocaleDateString([], {hour:'2-digit', minute:'2-digit', hour12:true});
  // timeLeftElement.innertext = timeLeftTimeStamp;
  document.querySelector('.js-sun').dataset.time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  //const timeleft = _parseMillisecondsIntoReadableTime(sunset) - new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  const timeleft = (sunset - new Date().getTime() / 1000) / 60;
  arraytime = (timeleft / 60).toString().split('.');
  document.querySelector('.js-time-left').innerText = arraytime[0] + ' uur ' + arraytime[1].substring(0, 2) + ' minuten';

  console.info('sunset timeleft ' + sunset);
  console.info('current time ' + new Date().getTime());
  // console.info('sunset - current ')
  console.info('current time ' + new Date().getTime());
  // console.info(typeof(sunset - new Date()));
};

let startSunMovement = (city) => {
  setInterval(() => {
    updateTimeAndTimeLeft(city.sunset);
    placeSunAndStartMoving(city.sunrise).catch((e) => console.error(e));
  }, timeout);
};

// const setDOMElements = () => {
// 	sunriseElement = document.querySelector('.js-sunrise');
// 	sunsetElement = document.querySelector('.js-sunset');
// 	minutesLeftElement = document.querySelector('.js-time-left');

// 	sunElement = document.querySelector('.js-sun');
// 	timeLeftElement = document.querySelector('.js-time-left');

// 	if(
// 		!sunriseElement ||
// 		!sunsetElement ||
// 		!minutesLeftElement ||
// 		!sunElement ||
// 		!timeLeftElement) {
// 		throw new Error('Could not find all elements');
// 	}
// }

const makeReadableTimeFormatFromTimestamp = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

// const setLocationData = (city) => {
// 	sunriseElement.innertext = makeReadableTimeFormatFromTimestamp(city.sunrise);
// 	sunsetElement.innertext = makeReadableTimeFormatFromTimestamp(city.sunset);
// 	locationElement.innerText = `${city.name}, ${city.country}`;
// }

// _ = helper functions
function _parseMillisecondsIntoReadableTime(timestamp) {
  //Get hours from milliseconds
  const date = new Date(timestamp * 1000);
  // Hours part from the timestamp
  const hours = '0' + date.getHours();
  // Minutes part from the timestamp
  const minutes = '0' + date.getMinutes();
  // Seconds part from the timestamp (gebruiken we nu niet)
  // const seconds = '0' + date.getSeconds();

  // Will display time in 10:30(:23) format
  return hours.substr(-2) + ':' + minutes.substr(-2); //  + ':' + s
}

// 4 Zet de zon op de juiste plaats en zorg ervoor dat dit iedere minuut gebeurt.
let placeSunAndStartMoving = (sunrise) => {
  const currenttime = new Date().getTime();
  const percentageday = (currenttime - sunrise * 1000) / totalTimems;

  const sunriseLeftPosition = percentageday * 100;
  const sunriseBottomPosition = Math.sin(Math.PI * percentageday) * 100;
  console.info('currenttime' + currenttime);
  console.info('totaltime' + totaltimems);
  console.info('sunrise' + sunrise);
  console.info('percentageday' + percentageday);
  console.info('sunrisebottom' + sunriseBottomPosition);

  document.querySelector('.js-sun').style.left = `${sunriseLeftPosition}%`;
  document.querySelector('.js-sun').style.bottom = `${sunriseBottomPosition}%`;
  // In de functie moeten we eerst wat zaken ophalen en berekenen.
  // Haal het DOM element van onze zon op en van onze aantal minuten resterend deze dag.
  // Bepaal het aantal minuten dat de zon al op is.
  // Nu zetten we de zon op de initiële goede positie ( met de functie updateSun ). Bereken hiervoor hoeveel procent er van de totale zon-tijd al voorbij is.
  // We voegen ook de 'is-loaded' class toe aan de body-tag.
  // Vergeet niet om het resterende aantal minuten in te vullen.
  // Nu maken we een functie die de zon elke minuut zal updaten
  // Bekijk of de zon niet nog onder of reeds onder is
  // Anders kunnen we huidige waarden evalueren en de zon updaten via de updateSun functie.
  // PS.: vergeet weer niet om het resterend aantal minuten te updaten en verhoog het aantal verstreken minuten.
};

// 3 Met de data van de API kunnen we de app opvullen
let showResult = (queryResponse) => {
  // We gaan eerst een paar onderdelen opvullen
  // Zorg dat de juiste locatie weergegeven wordt, volgens wat je uit de API terug krijgt.
  // Toon ook de juiste tijd voor de opkomst van de zon en de zonsondergang.
  // Hier gaan we een functie oproepen die de zon een bepaalde positie kan geven en dit kan updaten.
  // Geef deze functie de periode tussen sunrise en sunset mee en het tijdstip van sunrise.
  document.querySelector('.js-location').innerText = queryResponse.name + ', ' + queryResponse.country;
  document.querySelector('.js-sunrise').innerText = _parseMillisecondsIntoReadableTime(queryResponse.sunrise);
  document.querySelector('.js-sunset').innerText = _parseMillisecondsIntoReadableTime(queryResponse.sunset);
};

const getData = (endpoint) => {
  return fetch(endpoint)
    .then((r) => r.json())
    .catch((e) => console.error(e));
};

document.addEventListener('DOMContentLoaded', async function () {
  // 1 We will query the API with longitude and latitude.
  let lat = 50.8027841;
  let lon = 3.2097454;
  const endpoint = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1582dbea022940ad4b9e58b28cd900ad&units=metric&lang=nl&cnt=1`;
  const { city } = await getData(endpoint);
  console.log(city);
  showResult(city);

  totaltimems = (city.sunset - city.sunrise) * 1000;
  placeSunAndStartMoving(city.sunrise);
  updateTimeAndTimeLeft(city.sunset);
  startSunMovement(city);
  // setDOMElements();
  // setLocationData(city);
  // totalTime = new Date(city.sunset - city.sunrise);

  // totalTime = new Date(city.sunset - city.sunrise *60); // geen idee of dit klopt
  // totalTime = (_parseMillisecondsIntoReadableTime(city.sunset) - _parseMillisecondsIntoReadableTime(city.sunrise)) / 60;
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
