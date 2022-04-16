import './style.css';

function Title(text) {
    const title = document.createElement('h1');
    title.textContent = text;
    return (
        title
    )
}

function printWeatherData()
{
    const locationInput = document.getElementById('location');
    getLocationWeather(locationInput.value)
    .then(data => {
        //Print name.
        document.getElementById('locationName').textContent = data.name;
        //Print temperature.
        switch(document.querySelector("input[name='temperatureMode']:checked").value)
        {
            case 'celsius':
                document.getElementById('temperature').textContent = `${Math.round(data.temp - 273.15)} degrees celsius`;
            break;
            case 'fahrenheit':
                document.getElementById('temperature').textContent = `${Math.round(data.temp * 9/5 - 459.67)} degrees fahrenheit`;
            break;
        }
        //Print weather.
        document.getElementById('description').textContent = data.weather[0].description
    })
}

async function getLocationWeather(location)
{
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=6660b08f87107700a8149f2aa3a03c67`, {mode:'cors'});
    const data = await response.json();
    return {name: data.name, temp: data.main.temp, weather: data.weather}
}

function Form() {
    const form = document.createElement('form');
    
    const locationLabel = document.createElement('label');
    locationLabel.textContent = 'Location:';
    locationLabel.setAttribute('for', 'location');
    form.appendChild(locationLabel);
    
    const locationInput = document.createElement('input');
    locationInput.id = 'location';
    form.appendChild(locationInput);

    const submit = document.createElement('button');
    submit.textContent = 'get';
    submit.addEventListener('click', printWeatherData);
    form.appendChild(submit);

    const temperatureModeDiv = document.createElement('div');

    const celsiusLabel = document.createElement('label');
    celsiusLabel.textContent = "Celsius";
    celsiusLabel.setAttribute("for", "celsius");
    temperatureModeDiv.appendChild(celsiusLabel);

    const celsiusRadio = document.createElement('input');
    celsiusRadio.id = 'celsius';
    celsiusRadio.type = 'radio';
    celsiusRadio.name = 'temperatureMode';
    celsiusRadio.value = 'celsius';
    celsiusRadio.toggleAttribute("checked");
    temperatureModeDiv.appendChild(celsiusRadio);

    const fahrenheitLabel = document.createElement('label');
    fahrenheitLabel.textContent = "Fahrenheit";
    fahrenheitLabel.setAttribute("for", "fahrenheit");
    temperatureModeDiv.appendChild(fahrenheitLabel);
    
    const fahrenheitRadio = document.createElement('input');
    fahrenheitRadio.id = 'fahrenheit';
    fahrenheitRadio.type = 'radio';
    fahrenheitRadio.name = 'temperatureMode';
    fahrenheitRadio.value = 'fahrenheit'
    temperatureModeDiv.appendChild(fahrenheitRadio);

    form.appendChild(temperatureModeDiv);

    form.addEventListener('submit', e => {
        e.preventDefault();
    })
    
    return (
        form
    )
}

function weatherDisplay()
{
    const display = document.createElement('div');
    const locationName = document.createElement('h1');
    locationName.id = 'locationName';
    display.appendChild(locationName);
    const temperature = document.createElement('h2');
    temperature.id = 'temperature';
    display.appendChild(temperature);
    const description = document.createElement('h3');
    description.id = 'description';
    display.appendChild(description);

    return (
        display
    )
}

document.body.appendChild(Title('Query Weather Data!'));

document.body.appendChild(Form());

document.body.appendChild(weatherDisplay());


