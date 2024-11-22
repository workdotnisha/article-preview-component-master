const button = document.querySelector('button');

button.addEventListener('click', () => {
    button.style.backgroundColor = '#555A65';
    button.style.color = '#ffffff';
    button.appendChild(document.createElement('span')).textContent = 'Share';
});