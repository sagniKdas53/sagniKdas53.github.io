let current = 0;
let max = 0;
let perUnit = 0;
let now = 0;
let end = 0;
let value = {
    "savedAt": "now",
    "expiresAt": "end",
    "perUnit": "perUnit",
    "max": "max",
    "current": "current"
};

function loadData() {
    try {
        value.savedAt = parseInt(Cookies.get("savedAt"));
        value.expiresAt = parseInt(Cookies.get("ExpAt"));
        value.perUnit = parseInt(Cookies.get("perUnit"));
        value.max = parseInt(Cookies.get("max"));
        value.current = parseInt(Cookies.get("current"));
        //console.log(typeof value.max);
        if (Cookies.get("saveMaxState") == 'true') {
            document.getElementById("MaxEn").checked = true;
            document.getElementById("max").value = value.max;
        } else {
            document.getElementById("MaxEn").checked = false;
            document.getElementById("max").value = "";
        }
        if (Cookies.get("savePerState") == 'true') {
            document.getElementById("perEn").checked = true;
            document.getElementById("perUnit").value = value.perUnit;
        } else {
            document.getElementById("perEn").checked = false;
            document.getElementById("perUnit").value = "";
        }
    } catch (err) {
        console.log("Look a error " + err.message);
    }
}

function saveData() {
    value = {
        "savedAt": now,
        "expiresAt": end,
        "perUnit": perUnit,
        "max": max,
        "current": current
    };
}

function saveCookies() {
    Cookies.set("max", max, { path: "", expiry: 30 });
    Cookies.set("savedAt", value.savedAt, { path: "", expiry: 30 });
    Cookies.set("ExpAt", value.expiresAt, { path: "", expiry: 30 });
    Cookies.set("current", current, { path: "", expiry: 30 });
    Cookies.set("perUnit", perUnit, { path: "", expiry: 30 });
    Cookies.set("saveMaxState", document.getElementById("MaxEn").checked, { path: "", expiry: 30 });
    Cookies.set("savePerState", document.getElementById("perEn").checked, { path: "", expiry: 30 });
}

function dispResult(str) {
    document.getElementById("res").innerHTML = str;
    return false;
}

function getData() {
    current = parseInt(document.getElementById("current").value);
    max = parseInt(document.getElementById("max").value);
    perUnit = parseInt(document.getElementById("perUnit").value);
    now = Date.now();
    end = getEnd();
    saveData();
    console.log(value);
    saveCookies();
    dispResult(getEndStr(getEnd() - now));
    return false;
}

function getEnd() {
    return parseInt(now + ((max - current) * perUnit) * 60000);
}

function getEndStr(duration) {
    var seconds = Math.floor((duration / 1000) % 60);
    var minutes = Math.floor((duration / (1000 * 60)) % 60);
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}
