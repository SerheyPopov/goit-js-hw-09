const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]')
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.startBtn.addEventListener('click', startColorChange);
refs.stopBtn.addEventListener('click', stopColorChange);
let intervalId = null;


function startColorChange() {
    if (this.isActive) {
        return;
    }
    this.isActive = true;
    intervalId = setInterval(() => {
        let color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    }, 1000);
}

function stopColorChange() {
    clearInterval(intervalId);
}


