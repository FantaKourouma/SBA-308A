const GIPHY_URL = 'https://api.giphy.com/v1/gifs/random';
const API_KEY = 'whJLEAv03IBIhuNjotHA36wn9aFe04FB';
const gifImage = document.getElementById('gifImage');
const fetchGifBtn = document.getElementById('fetchGifBtn');


async function fetchRandomGif() {
    try {
        const response = await fetch(`${GIPHY_URL}?api_key=${API_KEY}&tag=&rating=g`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        gifImage.src = data.data.images.original.url; 
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchGifBtn.addEventListener('click', fetchRandomGif);


fetchRandomGif();

