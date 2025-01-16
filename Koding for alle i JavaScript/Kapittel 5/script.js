//gidder ikke full MVC, kan holde med litt på lek
let app = document.getElementById("app");
let num1 = 0;
let num2 = 0;

run();

function run() {
    console.log("testing at det kjører??");
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
                <p>Tall 1</p>
                <input class="number" type="range" min="0" max="100" value="${num1}" oninput="changeValue(this)" />
            </div>
            <div class="chosen">
                <p>Tall 2</p>
                <input class="number" type="range" min="0" max="100" value="${num2}" oninput="changeValue(this)" />
            </div>
        </div>
        <div class="result">
            ${num1} + ${num2} = ${addition} <br/>
            ${num1} - ${num2} = ${subtraction} <br/>
            ${num1} * ${num2} = ${multiplication} <br/>
            ${num1} / ${num2} = ${division} <br/>
        </div>
    `;
    // console.log(app + "inne i run");
    app.innerHTML = html;
}
// console.log(app + "utenfor run");
// console.log(document.body + "document");
