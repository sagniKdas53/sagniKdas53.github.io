const get = function () {
  const max = document.getElementById("max").value;
  const current = document.getElementById("ce").value;
  const mpe = document.getElementById("mpe").value;
  Cookies.set('max', max, { expires: 1, path: '' });
  Cookies.set('curr', current, { expires: 1, path: '' });
  Cookies.set('mpe', mpe, { expires: 1, path: '' });
  return [mpe, current, max];
}

const compute = function () {
  const res = get();
  const tt = giveTime();//new Date().getTime();
  const value = (res[2] - res[1]) * res[0];
  const final = (value * 60000) + tt;
  //const end = new Date(final);
  //console.log("(" + tt + "-" + final + ")/60000=" + (final - tt) / 60000 + "===" + value);
  //console.log(end);
  //document.getElementById("time_str").innerHTML = final;
  Cookies.set("end", final, { expires: 1, path: '' }) //end is the final time variable
  set();
}

const giveTime = function () {
  const current = new Date();
  const time = current.getTime();
  return time;
}

const set = function () {
  const end_val = Cookies.get("end");
  //console.log(typeof(end_val),end_val);
  const end_timer = new Date(parseInt(end_val));
  const now_t = new Date();
  const ms_left=end_timer.getTime() - now_t.getTime();
  //console.log(end_timer,end_timer.getTime(),now_t.getTime());
  document.getElementById("t_left").innerHTML = human_time(ms_left);
  document.getElementById("max").value = Cookies.get("max");
  document.getElementById("ce").value = Cookies.get("curr")
  document.getElementById("mpe").value = Cookies.get("mpe")
  document.getElementById("time_str").innerHTML = end_val;
  //compute();
}

const liveUpdate = function (dooop) {
  console.log("live update working");
  document.getElementById("t_left").innerHTML = human_time(dooop-60000);
}

const human_time = function (value) {
  let seconds=0,minutes=0,hours=0,days=0;
  seconds= value / 1000;
  if (seconds > 60) {
    minutes = seconds / 60;
    seconds = seconds - (minutes * 60);
    if (minutes > 60) {
      hours = minutes / 60;
      minutes = minutes - (hours * 60);
      if (hours > 24) {
        days = hours / 24;
        hours = hours - (days * 24);
      }
    }
  }
  //console.log(value,days,hours,minutes,seconds);
  return `${Math.round(days)}D:${Math.round(hours)}H:${Math.round(minutes)}M`;
}


