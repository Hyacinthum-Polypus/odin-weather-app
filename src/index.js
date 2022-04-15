import './style.css';

function Title(text) {
    const title = document.createElement('h1');
    title.textContent = text;
    return (
        title
    )
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
    
    return (
        form
    )
}

document.querySelector('body').appendChild(Title('Query Weather Data!'));

document.querySelector('body').appendChild(Form());


