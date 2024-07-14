const eMonths = document.getElementById("months")
const eDays = document.getElementById("days")
const eHours = document.getElementById("hours")
const eMinutes = document.getElementById("minutes")
const eSeconds = document.getElementById("seconds")

const targetDate = new Date("July 23, 2024 16:00:00").getTime();

function formatNumber(number) {
    return number < 10 ? '0' + number : number;
}

function updateCountdown() {
    
    const now = new Date().getTime().toFixed()
    const distance = targetDate - now;
    console.log(distance);
    if (distance < 0) {
        clearInterval(interval);
        daysElement.innerText = '00';
        hoursElement.innerText = '00';
        minutesElement.innerText = '00';
        secondsElement.innerText = '00';
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    eDays.innerText = formatNumber(days);
    eHours.innerText = formatNumber(hours);
    eMinutes.innerText = formatNumber(minutes);
    eSeconds.innerText = formatNumber(seconds);
}

window.onload = function() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
};
