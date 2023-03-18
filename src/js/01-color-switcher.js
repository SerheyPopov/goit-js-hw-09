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


function startColorChange() {
   
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
    const intervalId = setInterval(() => {
        let color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    }, 1000);
}

function stopColorChange() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
    console.log(9);
}


