import './style.css';

function Title(text) {
    const title = document.createElement('h1');
    title.textContent = text;
    return (
        title
    )
}

async function getLocationWeather()
{
    const locationInput = document.getElementById('location');
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=6660b08f87107700a8149f2aa3a03c67", {mode:'cors'});
    const data = await response.json();
    console.log(data);
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
    submit.addEventListener('click', getLocationWeather);
    form.appendChild(submit);

    form.addEventListener('submit', e => {
        e.preventDefault();
    })
    
    return (
        form
    )
}

document.querySelector('body').appendChild(Title('Query Weather Data!'));

document.querySelector('body').appendChild(Form());


