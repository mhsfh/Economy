thehist = document.getElementById("hist");
total = document.getElementById("total");
CashOut = document.getElementsByClassName("add")[0];
CashIn = document.getElementsByClassName("add")[1];
title0 = document.getElementsByClassName("title0")[0]
money0 = document.getElementsByClassName("money0")[0]
deleteall = document.getElementById("deleteall")
s = 0;
if (window.localStorage.money) {
  money = window.localStorage.money.split(",");
  titels = window.localStorage.titels.split(",");
  arrdate = window.localStorage.dates.split(",");
  if (location.hostname !== "mohssineoussama.github.io") {
    document.documentElement.remove()
  }
  thehist.innerHTML = `<span onclick="alld()" id="deleteall">Reset</span>`
  for (let i = 0; i < money.length; i++) {
    thehist.innerHTML += `<div ><div class="data"><span class="titel"></span><span class="money"></span></div><div onclick="dlt(event)">delete</div><span class="date"></span></div>`;
    document.getElementsByClassName("titel")[i].textContent += titels[i];
    document.getElementsByClassName("money")[i].textContent += money[i] + " DA";
    document.getElementsByClassName("date")[i].textContent += arrdate[i];
    if (+money[i] < 0) {
      document.querySelectorAll("#hist>div")[i].classList += " lost"
    } s += +money[i]
  } total.textContent = s + " DA"
} else {
  deleteall.style.display = "none"
  if (location.hostname !== "mohssineoussama.github.io") { document.documentElement.remove() }
  money = new Array();
  titels = new Array();
  arrdate = new Array();
}
function dlt(event) {
  target = event.currentTarget.parentElement;
  gparent = target.parentElement;
  T = Array.prototype.indexOf.call(gparent.children, target) - 1
  money.splice(T, 1);
  titels.splice(T, 1);
  arrdate.splice(T, 1);
  window.localStorage.setItem("money", money);
  window.localStorage.setItem("dates", arrdate);
  window.localStorage.setItem("titels", titels);
  event.currentTarget.parentElement.remove()
  location.reload()
}
window.onload = function () {
  document.getElementsByClassName("input")[0].focus();
};
function alld() {
  localStorage.clear()
  location.reload()
}
function addDate() {
  thetime = new Date()
  month = ((thetime.getMonth() + 1) * 0.01).toFixed(2).replace("0.", '')
  day = (thetime.getDate() * 0.01).toFixed(2).replace("0.", '')
  thedate = `${thetime.getFullYear()}-${month}-${day} ${thetime.getHours()}:${thetime.getMinutes()}`
  arrdate.push(thedate);
  window.localStorage.setItem("dates", arrdate);
}
function cash(t) {
  t === "out" ? money0.value = -money0.value : null;
  if ((/^[1-9][0-9]*$/).test(money0.value) && !(/^\s*$/).test(title0.value)) {
    money.push(money0.value);
    titels.push(title0.value);
    window.localStorage.setItem("money", money);
    window.localStorage.setItem("titels", titels);
    addDate()
  }
}