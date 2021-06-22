let current = 0;
let max = 0;
let perUnit = 0;
let now = 0;
let end = 0;
let savedAt = 0;
let expiresAt = 0;

function loadData() {
    try {
        savedAt = parseInt(Cookies.get("savedAt"));
        expiresAt = parseInt(Cookies.get("ExpAt"));
        perUnit = parseInt(Cookies.get("perUnit"));
        max = parseInt(Cookies.get("max"));
        current = parseInt(Cookies.get("current"));
        //console.log(typeof max);
        if (Cookies.get("saveMaxState") == 'true') {
            document.getElementById("MaxEn").checked = true;
            document.getElementById("max").value = max;
        } else {
            document.getElementById("MaxEn").checked = false;
            document.getElementById("max").value = "";
        }
        if (Cookies.get("savePerState") == 'true') {
            document.getElementById("perEn").checked = true;
            document.getElementById("perUnit").value = perUnit;
        } else {
            document.getElementById("perEn").checked = false;
            document.getElementById("perUnit").value = "";
        }
    } catch (err) {
        savedAt = 0;
        expiresAt = 0;
        perUnit = 0;
        max = 0;
        current = 0;
        document.getElementById("MaxEn").checked = false;
        document.getElementById("perEn").checked = false;
    }
}

function saveData() {
    savedAt = now;
    expiresAt = end;
}

function saveCookies() {
    Cookies.set("max", max, { expires: 30 });
    Cookies.set("savedAt", savedAt, { expires: 30 });
    Cookies.set("ExpAt", expiresAt, { expires: 30 });
    Cookies.set("current", current, { expires: 30 });
    Cookies.set("perUnit", perUnit, { expires: 30 });
    Cookies.set("saveMaxState", document.getElementById("MaxEn").checked, { expires: 30 });
    Cookies.set("savePerState", document.getElementById("perEn").checked, { expires: 30 });
}

function getData() {
    current = parseInt(document.getElementById("current").value);
    max = parseInt(document.getElementById("max").value);
    perUnit = parseInt(document.getElementById("perUnit").value);
    if (isNaN(current) || isNaN(max) || isNaN(perUnit)) {
        alert("Fill up the fields");
    } else {
        now = Date.now();
        end = getEnd();
        saveData();
        saveCookies();
        updateClock();
    }
    return false;
}

function getEnd() {
    return parseInt(now + ((max - current) * perUnit) * 60000);
}

// clock 

function getTimeRemaining(endtime) {
    const total = endtime - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

function initClock(endtime) {
    const clock = document.getElementById('clockdiv');
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
}

function updateClock() {
    console.log("clock loop");
    const clock = document.getElementById('clockdiv');
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
    const t = getTimeRemaining(end);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
        clearInterval(timeinterval);
    }else{
    const timeinterval = setInterval(updateClock, 5000);
}}