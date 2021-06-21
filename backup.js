const getNSetCookies = function() {
    const max = parseInt(document.getElementById("max").value);
    const current = parseInt(document.getElementById("ce").value);
    const mpe = parseInt(document.getElementById("mpe").value);
    Cookies.set("max", max, { expires: 1, path: "" });
    Cookies.set("curr", current, { expires: 1, path: "" });
    Cookies.set("mpe", mpe, { expires: 1, path: "" });
    const timeNow = giveTime();
    const minutes = (max - current) * mpe;
    const finalTime = minutes * 60000 + timeNow;
    Cookies.set("init", timeNow, { expires: 1, path: "" });
    Cookies.set("end", finalTime, { expires: 1, path: "" });
    console.log("done setting");
};

const loadCookies = function() {
    const epm = Cookies.get("mpe");
    const prev = parseInt(Cookies.get("curr"));

    document.getElementById("max").value = Cookies.get("max");
    document.getElementById("mpe").value = epm;
    mpe_global = parseInt(epm) * 60000;
    const last = parseInt(Cookies.get("init"));

    const upadte_e = (giveTime() - last);
    const end = parseInt(Cookies.get("end"));
    ms_left = end - giveTime();

    document.getElementById("t_left").innerHTML = human_time(ms_left);
    const currentEnergy = prev + Math.trunc(upadte_e / mpe_global);
    document.getElementById("ce").value = currentEnergy;
    //document.getElementById("time_str").innerHTML = new Date(end).toLocaleString();
    console.log("done loading");
};

const Count = function() {
    getNSetCookies();
    loadCookies();
    live = setInterval(liveUpdate, 1000);
    console.log("done adding timer");
};


const giveTime = function() {
    const current = new Date();
    const time = current.getTime();
    return time;
};



const liveUpdate = function() {
    document.getElementById("res").innerHTML = human_time(ms_left);
    ms_left -= 1000;
    updateCurrEn();
    if (ms_left <= 0) {
        window.alert("Energy Full");
        clearInterval(live);
    }
    return false;
};

const human_time = function(value) {
    var seconds = value / 1000;
    var days = Math.floor(seconds / (3600 * 24));
    seconds -= days * 3600 * 24;
    var hrs = Math.floor(seconds / 3600);
    seconds -= hrs * 3600;
    var mnts = Math.floor(seconds / 60);
    seconds -= mnts * 60;

    return `${Math.trunc(days)} Days 
          ${Math.trunc(hrs)} Hours 
          ${Math.trunc(mnts)} Minutes
          ${Math.trunc(seconds)} Seconds`;
};

const updateCurrEn = function() {
    const start = parseInt(Cookies.get("init"));
    const diff_init = giveTime() - start;
    const e_units = diff_init / mpe_global;
    if (e_units >= 0) {
        ste = parseInt(document.getElementById("ce").value);
        ste += e_units;
        document.getElementById("ce").value = Math.trunc(ste);
    } else {
        console.log(e_units);
        clearInterval(live);
    }
};

const save = function() {
    Cookies.set("curr", ste, { expires: 1, path: "" });
    Cookies.set("init", giveTime(), { expires: 1, path: "" });
}