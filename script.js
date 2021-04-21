const get = function () {
  const max = document.getElementById("max").value;
  const current = document.getElementById("ce").value;
  const mpe = document.getElementById("mpe").value;
  Cookies.set('max', max , { expires: 1, path: '' });
  Cookies.set('curr', current , { expires: 1, path: '' });
  Cookies.set('mpe', mpe , { expires: 1, path: '' });
  return [mpe, current, max];
}

const compute = function () {
  const res = get();
  const value = (res[2] - res[1]) * res[0];
  const tt = giveTime();
  const final = (value * 60000) + tt;
  Cookies.set("timer", final , { expires: 1, path: '' })
  console.log("("+tt + "-" + final + ")/60000=" + (final - tt) / 60000 + "===" + value);
  const end = new Date(final);
  console.log(end);
  document.getElementById("left").innerHTML = end;
  set();
}

const giveTime = function () {
  const current = new Date();
  const time = current.getTime();
  return time;
}

const set = function () {
  document.getElementById("timr").innerHTML = Cookies.get("timer");
  document.getElementById("max").value=Cookies.get("max");
  document.getElementById("ce").value=Cookies.get("curr")
  document.getElementById("mpe").value =Cookies.get("mpe")
}

