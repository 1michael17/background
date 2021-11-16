var _ = require("lodash");
//cd Desktop\gFile
// && exit 1

let arrayy = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Answer: `, _.without(arrayy, 3));
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let wrte = document.querySelector(".styled");
// let color3 = document.querySelector(".color3");
let body = document.getElementById("gradient");
//

function setG() {
  body.style.background = `linear-gradient(90deg, ${color1.value}, ${color2.value})`;
  wrte.document.createTextNode(`linear-gradient(90deg, ${a}, ${b})`);
  css.textContent = body.style.background + ";";
}
body.style.background = `linear-gradient(90deg, ${color1.value}, ${color2.value})`;

color1.addEventListener("input", setG);
color2.addEventListener("input", setG);

// color3.addEventListener("input", setG);

/* let a1 = document.querySelector(".a1").value;
let a2 = document.querySelector(".a2").value;
let a3 = document.querySelector(".a3").value;
let a = 90;
a = a1.value;
b = a2.value;
c = a3.value;

a1.onclick(a);
a2.onclick(b);
a3.onclick(c); */
// learn how to get the value of OPTION in SELECT TAG
/* function ang() {
  let sid = prompt("enter Prefered angle");
  return sid;
} */
