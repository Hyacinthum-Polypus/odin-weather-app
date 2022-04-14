function component() {
    const title = document.createElement('h1');
    title.textContent = "Hello, World!";
    return (
        title
    )
}

document.querySelector('body').append(component());