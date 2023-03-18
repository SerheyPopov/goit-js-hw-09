import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/dark.css");

const btn = document.querySelector('button');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
btn.addEventListener('click', btnAction);
btn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        const anyDate = new Date(selectedDates[0]);
        const nowDate = new Date(this.now);

        if (!(nowDate.getTime() < anyDate.getTime())) {
            Notiflix.Notify.warning('Please choose a date in the future');
            return;
        }
        btn.disabled = false;
    },
};

const flatPickr = flatpickr('#datetime-picker', options)

function btnAction() {
    btn.disabled = true;
    Notiflix.Notify.success('Timer start');
    const intervalId = setInterval(() => {

        const pickedTime = flatPickr.selectedDates[0].getTime();
        const currentTime = Date.now();
        const intervalTime = pickedTime - currentTime;

        if (pickedTime < currentTime) {
            clearInterval(intervalId);
            btn.disabled = false;
            Notiflix.Notify.info('Timer stop');
            return;
        }
        daysEl.textContent = convertMs(intervalTime).days;
        hoursEl.textContent = convertMs(intervalTime).hours;
        minutesEl.textContent = convertMs(intervalTime).minutes;
        secondsEl.textContent = convertMs(intervalTime).seconds;
    }, 1000);
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

function pad(value) {
    return String(value).padStart(2, '0');
}
