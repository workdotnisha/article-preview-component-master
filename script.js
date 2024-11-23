const shareButton = document.getElementById('share-button');
const shareOptions = document.querySelector('.share-options');
const shareImage = document.querySelector('.share-icon');

shareButton.addEventListener('click', () => {
    if (shareOptions.style.display === 'none' || !shareOptions.style.display) {
        shareOptions.style.display = 'flex'; 
        shareButton.style.backgroundColor = '#555A65';
        shareImage.style.filter = 'brightness(0) invert(1)';
    } else {
        shareOptions.style.display = 'none'; 
        shareButton.style.backgroundColor = '#EDF2F8';
        shareImage.style.filter = 'brightness(0) sepia(1) saturate(1) hue-rotate(180deg)';
    }
});