//gidder ikke full MVC, kan holde med litt på lek
let app = document.getElementById("app");
let num1 = 0;
let num2 = 0;

run();

function run() {
  let addition = num1 + num2;
  let subtraction = num1 - num2;
  let multiplication = num1 * num2;
  let division = num1 / num2;
  let html = "";

  html += /*HTML*/ `
        <h1>Kaaaaaalkulator!</h1>
        <p>Velg to tall og se resultatene!</p>
        <div class="choice">
            <div class="chosen">
                <p>Tall 1 = ${num1}</p>
                <input class="number" type="range" min="0" max="10" value="${num1}" onchange="changeValue(this.value, 1)" />
            </div>
            <div class="chosen">
                <p>Tall 2 = ${num2}</p>
                <input class="number" type="range" min="0" max="10" value="${num2}" onchange="changeValue(this.value, 2)" />
            </div>
        </div>
        <div class="result">
            ${num1} + ${num2} = ${addition} <br/>
            ${num1} - ${num2} = ${subtraction} <br/>
            ${num1} * ${num2} = ${multiplication} <br/>
            ${num1} / ${num2} = ${
                checkIfZero(division) ? "kan ikke dele på 0" : division
            } <br/>
        </div>
    `;
  app.innerHTML = html;
}
function checkIfZero(toCheck) {
  return isNaN(parseInt(toCheck));
}

function changeValue(newValue, numNumber){
  let changeTo = parseInt(newValue);
  if (numNumber == 1) num1 = changeTo;
  else if (numNumber == 2) num2 = changeTo;
  run();
}
