thehist = document.getElementById("hist");
total = document.getElementById("total");
CashOut = document.getElementsByClassName("add")[0];
CashIn = document.getElementsByClassName("add")[1];
title0 = document.getElementsByClassName("title0")[0]
money0 = document.getElementsByClassName("money0")[0]
deleteall = document.getElementById("deleteall")
s = 0;
if (localStorage.money) {
  // localStorage.money = JSON.stringify(localStorage.money.split(","))
  money = JSON.parse(localStorage.money);
  titels = JSON.parse(localStorage.titels);
  arrdate = JSON.parse(localStorage.dates);
  // if (location.hostname !=="mohssineoussama.github.io"){document.documentElement.remove()}
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
  console.log("hi")
  deleteall.style.display = "none"
  // if (location.hostname !== "mohssineoussama.github.io") { document.documentElement.remove() }
  money = new Array();
  titels = new Array();
  arrdate = new Array();
}
function dlt(event) {
  console.log("dlt")
  target = event.currentTarget.parentElement;
  gparent = target.parentElement;
  T = Array.prototype.indexOf.call(gparent.children, target) - 1
  money.splice(T, 1);
  titels.splice(T, 1);
  arrdate.splice(T, 1);
  localStorage.setItem("dates", JSON.stringify(arrdate));
  localStorage.setItem("money", JSON.stringify(money));
  localStorage.setItem("titels", JSON.stringify(titels));
  event.currentTarget.parentElement.remove()
  location.reload()
}
onload = function () {
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
  localStorage.setItem("dates", JSON.stringify(arrdate));
}
function cash(t) {
  if (t === "out") {
    money0.value = -money0.value
    console.log("cash-OUT")
  }
  if ((/^(-)?[1-9][0-9]*$/).test(money0.value) && !(/^\s*$/).test(title0.value)) {
    console.log("cash-OUT 2")
    money.push(money0.value);
    titels.push(title0.value);
    localStorage.setItem("money", JSON.stringify(money));
    localStorage.setItem("titels", JSON.stringify(titels));
    addDate()
  }
}
if (localStorage.vrf !== 'true') {
  localStorage.money = JSON.stringify(localStorage.money.split(","))
  localStorage.titels = JSON.stringify(localStorage.titels.split(","))
  localStorage.dates = JSON.stringify(localStorage.dates.split(","))
}
localStorage.setItem("vrf", true)