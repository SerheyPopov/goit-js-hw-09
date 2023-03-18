const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]')
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.startBtn.addEventListener('click', startColorChange);
refs.stopBtn.addEventListener('click', stopColorChange);
refs.stopBtn.disabled = true;
let color;

function startColorChange() {
   
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    color = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function stopColorChange() {
    clearInterval(color);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}


