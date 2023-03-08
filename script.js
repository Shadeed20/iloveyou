const yesBtn = document.getElementById('yes-btn');
const marryBtn = document.getElementById('marry-btn');
const gifPopup = document.getElementById('gif-popup');

yesBtn.addEventListener('click', () => {
	gifPopup.classList.add('show');
});

marryBtn.addEventListener('click', () => {
	window.open('https://youtu.be/2Vv-BfVoq4g?t=79', '_blank');
});