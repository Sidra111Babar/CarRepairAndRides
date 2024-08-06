
// Function to load content dynamically
function loadContent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            // Initialize collapse behavior after loading content
            initCollapse();
        })
        .catch(error => console.error('Error loading file:', error));
}



document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('background-video');
    const playPauseButton = document.getElementById('play-pause-button');
    const playPauseIcon = document.getElementById('play-pause-icon');

    playPauseButton.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseIcon.classList.remove('bx-play-circle');
            playPauseIcon.classList.add('bx-pause-circle');
        } else {
            video.pause();
            playPauseIcon.classList.remove('bx-pause-circle');
            playPauseIcon.classList.add('bx-play-circle');
        }
    });
});

document.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var homeContainer = document.getElementById('homepage');

    if (scrollPosition > 500) { 
        homeContainer.classList.remove('home');
        homeContainer.classList.add('homebg2');
    } else {
        homeContainer.classList.remove('homebg2');
        homeContainer.classList.add('home');
    }
});


