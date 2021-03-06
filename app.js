let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let mul = document.querySelector("#mul");
let divide = document.querySelector("#divide");

let equal = document.querySelector("#equal");
let c = document.querySelector("#C");

let output = document.querySelector("output");

const buttons = [zero,one,two,three,four,five,six,seven,eight,nine,plus,minus,mul,divide];

const val = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/'];

for(let i = 0; i < 14; i++){
  buttons[i].value = val[i];
}

 buttons.forEach((but) => {
   but.addEventListener("click", () => {
     output.value += but.value;
   });
 });


c.addEventListener("click", () => {
  output.value = "";
});

equal.addEventListener("click", () => {
  let x = output.value;
  let y = eval(x);
  output.value = y;
});