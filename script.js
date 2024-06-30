const eMonths = document.getElementById("months")
const eDays = document.getElementById("days")
const eHours = document.getElementById("hours")
const eMinutes = document.getElementById("minutes")
const eSeconds = document.getElementById("months")

const dateTarget = new Date("July 20, 2024 16:00:00").getTime();

function countDown(){
    const now = Date.now
    const diference = dateTarget - now;
    console.log(diference);
}

window.onload(() => {
    countDown()
})