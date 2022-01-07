thehist = document.getElementById("hist");
total = document.getElementById("total");
CashOut = document.getElementsByClassName("add")[0];
CashIn = document.getElementsByClassName("add")[1];
title0 = document.getElementsByClassName("title0")[0]
money0 = document.getElementsByClassName("money0")[0]
deleteall = document.getElementById("deleteall")
s = 0;
if (window.localStorage.money) {
  deleteall.style.display = "block"
  money = window.localStorage.money.split(",");
  titels = window.localStorage.titels.split(",");
  arrdate = window.localStorage.dates.split(",");
  // if (location.hostname !== "mohssineoussama.github.io") {
  //   document.documentElement.remove()
  // }
  for (let i = 0; i < money.length; i++) {
    thehist.innerHTML += `<div ><div class="data"><span class="titel"></span><span class="money"></span></div><div onclick="dlt(event)">delete</div><span class="date"></span></div>`;
    document.getElementsByClassName("titel")[i].textContent += titels[i];
    document.getElementsByClassName("money")[i].textContent += money[i] + " DA";
    document.getElementsByClassName("date")[i].textContent += arrdate[i];
    if (+money[i] < 0) {
      document.querySelectorAll("#hist>div")[i].classList += " lost"
    }
    s += +money[i]
  }
  total.textContent = s + " DA"
} else {
  // if (location.hostname !== "mohssineoussama.github.io") {
  //   document.documentElement.remove()
  // }
  money = new Array();
  titels = new Array();
  arrdate = new Array();
}
CashIn.addEventListener("click", function () {
  titleitem = title0.value;
  moneyitem = money0.value;
  chkit = titleitem.match(/^\s*$/gi)
  chkit0 = moneyitem.match(/^\s*$/gi)
  chkit1 = moneyitem.match(/^[0-9]+$/gi)
  if (chkit == null && chkit0 == null && chkit1 != null) {
    addDate()
    money.push(moneyitem);
    titels.push(titleitem);
    window.localStorage.setItem("money", money);
    window.localStorage.setItem("titels", titels);
  } else {
    console.log("not valid")
  }
}
)
CashOut.addEventListener("click", function () {
  titleitem = title0.value;
  moneyitem = money0.value;
  chkit = titleitem.match(/^\s*$/gi)
  chkit0 = moneyitem.match(/^\s*$/gi)
  if (chkit == null && chkit0 == null) {
    addDate()
    money.push(-moneyitem); console.log(moneyitem)
    titels.push(titleitem);
    window.localStorage.setItem("money", money);
    window.localStorage.setItem("titels", titels);
  }
})




function dlt(event) {
  target = event.currentTarget.parentElement;
  gparent = target.parentElement;
  console.log("the grand parent " + gparent)
  console.log("the childe " + target)
  indexT = Array.prototype.indexOf.call(gparent.children, target) - 1
  console.log("the order of the child" + indexT)
  console.log("before " + money)
  money.splice(indexT, 1);
  console.log("after " + money)
  console.log("before " + titels)
  titels.splice(indexT, 1);
  console.log("after " + titels)
  console.log("before " + arrdate)
  arrdate.splice(indexT, 1);
  console.log("after " + arrdate)
  window.localStorage.setItem("money", money);
  window.localStorage.setItem("dates", arrdate);
  window.localStorage.setItem("titels", titels);
  event.currentTarget.parentElement.remove()
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
  month = thetime.getMonth() + 1
  day = thetime.getDate()
  year = thetime.getFullYear()
  hour = thetime.getHours()
  mn = thetime.getMinutes()
  thedate = `${year}-${month}-${day} ${hour}:${mn}`
  arrdate.push(thedate);
  window.localStorage.setItem("dates", arrdate);
}
ww = "hii"
function sayhi() {
  var myArray = "       ".match(/^\s*$/gi)
  // var myRe = /H/g;
  console.log(myArray)
  console.log(myArray.length < 0)
}
    // similar to "cdbbdbsbz".match(/d(b+)d/g); however,
    // "cdbbdbsbz".match(/d(b+)d/g) outputs Array [ "dbbd" ], while
    // /d(b+)d/g.exec('cdbbdbsbz') outputs Array [ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz' ].
