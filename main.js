thehist = document.getElementById("hist");
total = document.getElementById("total");
CashOut = document.getElementsByClassName("add")[0];
CashIn = document.getElementsByClassName("add")[1];
title0 = document.getElementsByClassName("title0")[0]
money0 = document.getElementsByClassName("money0")[0]
s = 0;
if (window.localStorage.money) {
  money = window.localStorage.money.split(",");
  titels = window.localStorage.titels.split(",");
  for (let i = 0; i < money.length; i++) {
    thehist.innerHTML += `<div ><div class="data"><span class="titel"></span><span class="money"></span></div><div onclick="dlt(event)">delete</div></div>`;
    document.getElementsByClassName("titel")[i].textContent += titels[i];
    document.getElementsByClassName("money")[i].textContent += money[i] + " DA";
    if (+money[i] < 0) {
      document.querySelectorAll("#hist>div")[i].classList += " lost"
    }
    s += +money[i]
  }
  total.textContent = s + " DA"
} else {
  money = new Array();
  titels = new Array();
}

CashIn.addEventListener("click", function () {
  titleitem = title0.value;
  moneyitem = money0.value;
  money.push(moneyitem);
  titels.push(titleitem); console.log(moneyitem)
  window.localStorage.setItem("money", money);
  window.localStorage.setItem("titels", titels);
}
)
CashOut.addEventListener("click", function () {
  titleitem = title0.value;
  moneyitem = money0.value;
  money.push(-moneyitem); console.log(moneyitem)
  titels.push(titleitem);
  window.localStorage.setItem("money", money);
  window.localStorage.setItem("titels", titels);
})
function dlt(event) {
  target = event.currentTarget.parentElement;
  gparent = target.parentElement;
  indexT = Array.prototype.indexOf.call(gparent.children, target)
  money.splice(indexT, 1);
  window.localStorage.setItem("money", money);
  event.currentTarget.parentElement.remove()
}
window.onload = function () {
  document.getElementsByClassName("input")[0].focus();
};