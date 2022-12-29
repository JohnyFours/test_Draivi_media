const hamurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar")

hamurger.addEventListener("click", () => {
    hamurger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

// ------Timer------


const days = document.getElementById('days')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')
const seconds = document.getElementById('seconds')


setInterval(() => {
    findDate();
}, 1000);

function findDate() {
    let currentTime = new Date(),
        christmasYear = currentTime.getFullYear();

    if (currentTime.getMonth() == 11 && currentTime.getDate() > 25) {
        christmasYear += 1;
    }

    let christmasTime = new Date(christmasYear, 11, 25);
    let dateDiff = Math.floor(christmasTime - currentTime);

    let days = 0
    let hours = 0
    let minutes = 0
    let seconds = 0

    if (currentTime.getMonth() != 11 || (currentTime.getMonth() == 11 && currentTime.getDate() != 25)) {
        days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
        hours = Math.floor((dateDiff) % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((dateDiff) % (1000 * 60) / 1000);
    }
    displayDate(setZero(days), setZero(hours), setZero(minutes), setZero(seconds));
}

function displayDate(d, h, m, s) {
    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

function setZero(timeValue) {
    if (timeValue < 10) {
        timeValue = "0" + timeValue;
    }
    return timeValue;
}
