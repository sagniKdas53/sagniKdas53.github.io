let ms_left;
let ms_left_copy;
let live;
let mpe_global;
const get = function () {
  const max = document.getElementById("max").value;
  const current = document.getElementById("ce").value;
  const mpe = document.getElementById("mpe").value;
  Cookies.set("max", max, { expires: 1, path: "" });
  Cookies.set("curr", current, { expires: 1, path: "" });
  Cookies.set("mpe", mpe, { expires: 1, path: "" });
  return [mpe, current, max];
};

const compute = function () {
  const res = get();
  const tt = giveTime();
  const value = (res[2] - res[1]) * res[0];
  const final = value * 60000 + tt;
  Cookies.set("init", tt, { expires: 1, path: "" });
  Cookies.set("end", final, { expires: 1, path: "" }); //end is the final time variable
  set();
};

const giveTime = function () {
  const current = new Date();
  const time = current.getTime();
  return time;
};

const set = function () {
  const end_val = Cookies.get("end");
  //console.log(typeof(end_val),end_val);
  const end_timer = new Date(parseInt(end_val));
  const now_t = new Date();
  ms_left = end_timer.getTime() - now_t.getTime();
  ms_left_copy = ms_left;
  //console.log(end_timer,end_timer.getTime(),now_t.getTime());
  document.getElementById("t_left").innerHTML = human_time(ms_left);
  document.getElementById("max").value = Cookies.get("max");
  const currt =
    parseInt(Cookies.get("curr")) +
    Math.floor((now_t.getTime() - parseInt(Cookies.get("init"))) / 360000);
  document.getElementById("ce").value = currt;
  document.getElementById("mpe").value = Cookies.get("mpe");
  document.getElementById("time_str").innerHTML = end_timer.toLocaleString();
  //compute();
  mpe_global = parseInt(Cookies.get("mpe"))*60000;
  live = setInterval(liveUpdate, 1000);
};

const liveUpdate = function () {
  //console.log("live update working");
  //console.log(`${ms_left_copy}-${ms_left}=${ms_left_copy-ms_left}===${mpe_global}?=>${mpe===(ms_left_copy-ms_left)}`);
  var st = document.getElementById("ce").value;
  if((ms_left_copy-ms_left) === mpe_global){
    st++;
    console.log(`Current Energy = ${st}`);
    document.getElementById("ce").value = st;
    ms_left_copy-=mpe;
  }
  if(ms_left<= 0){
    //console.log(ms_left);
    Cookies.set("curr", st, { expires: 1, path: "" });
    clearInterval(live);
  }
  document.getElementById("t_left").innerHTML = human_time(ms_left);
  ms_left -= 1000;
};

const human_time = function (value) {
  let seconds = 0,
    minutes = 0,
    hours = 0,
    days = 0;
  seconds = value / 1000;
  if (seconds > 60) {
    minutes = seconds / 60;
    seconds = seconds - minutes * 60;
    if (minutes > 60) {
      hours = minutes / 60;
      minutes = minutes - hours * 60;
      if (hours > 24) {
        days = hours / 24;
        hours = hours - days * 24;
      }
    }
  }
  //console.log(value, days, hours, minutes, seconds);
  return `${Math.floor(days)} Days 
          ${Math.floor(hours)} Hours 
          ${Math.floor(minutes)} Minutes
          ${Math.floor(seconds)} Seconds`;
};
