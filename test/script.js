const heartButton = document.getElementById('heart-button');

heartButton.addEventListener('click', () => {
    heartButton.classList.toggle('liked');
    heartButton.innerHTML = heartButton.classList.contains('liked') ? '&#x2764;' : '&#x2661;'; 
});
