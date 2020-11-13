const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

const pendulum = document.querySelector('#pendulum');
const slider = document.querySelector('.slider');
const pendulumSlider = document.querySelector('#pendulum__slider');
const bpm = document.querySelector('#bpm span');
const aud = new Audio('./tick.wav');
let speed = 0;

function handleUpdate(e) {
    const eventToPerform = e.target.textContent;

    if (eventToPerform === 'Start') {
        speed = 60 / slider.value;
    } else if (eventToPerform === 'Stop') {
        speed = 0;
    }

    document.documentElement.style.setProperty(`--speed`, speed + 's');
    bpm.innerText = slider.value;
    pendulumSlider.value = 600 - slider.value;
}

function handleSliderUpdate() {
    bpm.innerText = slider.value;
    pendulumSlider.value = 600 - slider.value;
}

function tick(e) {
    aud.currentTime = 0;
    aud.play();
}

startBtn.addEventListener('click', handleUpdate);
stopBtn.addEventListener('click', handleUpdate);

slider.addEventListener('change', handleSliderUpdate);
slider.addEventListener('mousemove', handleSliderUpdate);

pendulum.addEventListener('animationiteration', tick);
