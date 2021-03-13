// DOM Elements
const time = document.querySelector('.time'),
    greeting = document.querySelector('.greeting'),
    name = document.querySelector('.name'),
    focus = document.querySelector('.focus');
const imagesElements = ['../momentum/assets/images/morning/', '../momentum/assets/images/day/', '../momentum/assets/images/evening/', '../momentum/assets/images/img/night/']
const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'
];
// Options
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds(),
        nDay = today.getDay() - 1,
        nMonts = today.getMonth(),
        day = today.getDate();


    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';
    let nameOfDay = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    let NameOfMonth = ['янвааря', 'февраля', 'марта', 'апреля', 'майя', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    // 12hr Format
    // hour = hour % 12 || 12;

    // Output Time
    time.innerHTML = `${day} ${ NameOfMonth[nMonts] }, ${nameOfDay[nDay]} ${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
        sec
        )} `;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();


    if (hour >= 6 && hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('./assets/images/morning/01.jpg')";
        greeting.textContent = 'Доброе утро, ';
    } else if (hour >= 12 && hour < 18) {
        // Day
        document.body.style.backgroundImage = "url('./assets/images/day/01.jpg')";
        greeting.textContent = 'Добрый день, ';
    } else if (hour >= 18 && hour <= 23) {
        // Evening
        document.body.style.backgroundImage = "url('./assets/images/evening/01.jpg')";
        greeting.textContent = 'Добрый вечер, ';
    } else {
        // Night
        document.body.style.backgroundImage = "url('./assets/images/night/01.jpg')";
        greeting.textContent = 'Доброй ночи, ';
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name')
    }
}
// Set Name

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText.trim())
            name.blur()
        }
    } else {
        localStorage.setItem('name', e.target.innerText.trim())
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
        focus.textContent = '[Enter Focus]'
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText.trim())
            focus.blur()
        }
    } else {
        localStorage.setItem('focus', e.target.innerText.trim())
    }
}

function enterName(e) {
    if (name.textContent === '[Введите имя]')
        name.textContent = ''
}

function enterFocus(e) {
    if (focus.textContent === '[введите статус]')
        focus.textContent = ''
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();