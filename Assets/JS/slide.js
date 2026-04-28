const track = document.getElementById('track');

document.getElementById('phot').addEventListener('click', () => {
    track.classList.remove('slide-case');
    track.classList.add('slide-phot');
});

document.getElementById('case').addEventListener('click', () => {
    track.classList.remove('slide-phot');
    track.classList.add('slide-case');
});

document.getElementById('close-btn').addEventListener('click', () => {
    track.classList.remove('slide-case', 'slide-phot');
});