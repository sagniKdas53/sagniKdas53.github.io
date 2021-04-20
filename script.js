const get = function () {
  const max = document.getElementById("max").value;
  const current = document.getElementById("ce").value;
  const mpe = document.getElementById("mpe").value;

  return [mpe, current, max];
}

const compute = function () {
  const res = get();
  const value = (res[2] - res[1]) * res[0];
  const tt = giveTime();
  const final = (value * 60000) + tt;
  console.log("("+tt + "-" + final + ")/60000=" + (final - tt) / 60000 + "===" + value);
  const end = new Date(final);
  console.log(end);
  document.getElementById("left").innerHTML = end;
}

const giveTime = function () {
  const current = new Date();
  const time = current.getTime();
  return time;
}