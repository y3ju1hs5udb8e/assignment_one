// for theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

// for bulb
var state = 0;
function turnOn() {
    var image = document.getElementById('bulb');
    if (state == 1) {
      image.src = "../images/Bulb/bulbOFF.png";
      state = 0;
    } else {
      image.src = "../images/Bulb/bulbON.png";
      state = 1;
    }
}