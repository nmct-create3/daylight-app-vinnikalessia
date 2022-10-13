let sunriseElement;
let sunsetElement;
let minutesLeftElement;
let locationElement;

const setDOMElements = () => {
	sunriseElement = document.querySelector('.js-sunrise');
	sunsetElement = document.querySelector('.js-sunset');
	minutesLeftElement = document.querySelector('.js-time-left');
	if(!sunriseElement || !sunsetElement || !minutesLeftElement) {
		throw new Error('Could not find all elements');
	}
}

const makeReadableTimeFormatFromTimestamp = (timestamp) => {
	return new DataTransfer(timestamp * 1000).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', hour12:true});
}

const setLocationData = (city) => {
	sunriseElement.innertext = makeReadableTimeFormatFromTimestamp(city.sunrise);
	sunsetElement.innertext = makeReadableTimeFormatFromTimestamp(city.sunset);
	locationElement.innertext = `${city.name}, ${city.country}`;
}

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
let placeSunAndStartMoving = (totalMinutes, sunrise) => {
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
let showResult = queryResponse => {
	// We gaan eerst een paar onderdelen opvullen
	// Zorg dat de juiste locatie weergegeven wordt, volgens wat je uit de API terug krijgt.
	// Toon ook de juiste tijd voor de opkomst van de zon en de zonsondergang.
	// Hier gaan we een functie oproepen die de zon een bepaalde positie kan geven en dit kan updaten.
	// Geef deze functie de periode tussen sunrise en sunset mee en het tijdstip van sunrise.
};

const getData = (endpoint) => {
	return fetch(endpoint)
	.then((r) => r.json())
	.catch((e) => console.error(e))
}

document.addEventListener('DOMContentLoaded', async function() {
	// 1 We will query the API with longitude and latitude.
	let lat = 50.8027841;
	let lon = 3.2097454;
	const endpoint = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1582dbea022940ad4b9e58b28cd900ad&units=metric&lang=nl&cnt=1`;
	setDOMElements()
});
