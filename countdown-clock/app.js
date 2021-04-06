const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const daysBox = document.querySelector('.days');
const hoursBox = document.querySelector('.hours');
const minsBox = document.querySelector('.mins');
const secsBox = document.querySelector('.secs');

const futureDate = new Date();
const currentDate = futureDate.getDate();
futureDate.setDate(currentDate + 10);
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();

function pad(num) {
    return num < 10 ? `0${num}` : num;
}

let hours = futureDate.getHours();
const meridiem = hours < 12 ? 'am' : 'pm';
if (hours > 12) { hours -= 12 }
let mins = pad(futureDate.getMinutes());
let secs = pad(futureDate.getSeconds());

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${mins}${meridiem}`;

const futureTime = futureDate.getTime();

function getRemainingTime() {
    const t = futureTime - new Date().getTime();
    daysBox.textContent = pad(Math.floor(t / 1000 / 60 / 60 / 24));
    hoursBox.textContent = pad(Math.floor(t / 1000 / 60 / 60) % 24);
    minsBox.textContent = pad(Math.floor(t / 1000 / 60) % 60);
    secsBox.textContent = pad(Math.floor(t / 1000) % 60);

    if (t < 0) { 
        clearInterval(countDown);
        deadline.innerHTML = `<h4 class="expired">This giveaway has expired!</h4>`;
    }
}

const countDown = setInterval(getRemainingTime, 1000);