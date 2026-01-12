
let numberBank = [];

let evens = [];
let odds = [];

function addToBank(n){
    numberBank.push(n)
    console.log(numberBank)
    return numberBank
    
}

function sortOne(){
  let n = numberBank.shift()
  if(n===undefined)return;
  if(n % 2 === 0 ){
    evens.push(n)
  }
  if(n % 2 !== 0){
    odds.push(n)
  }

}




function NumberForm() {
  const $form = document.createElement("form");

  $form.innerHTML = `
    <label>
      Add numbers to our list and sort them out!
      <input name="number" type="number" />
    </label>

    <button type="submit">Add Number</button>
    <button type="button" id="sort1">Sort 1</button>
    <button type="button" id="sortAll">Sort All</button>

    <h2>Bank</h2>
    <section class="bank"></section>

    <h2>Odds</h2>
    <section class="odds"></section>

    <h2>Evens</h2>
    <section class="evens"></section>
  `;

  const $bank = $form.querySelector(".bank");
  const $odds = $form.querySelector(".odds");
  const $evens = $form.querySelector(".evens");

  function renderLists() {
    $bank.innerHTML = numberBank.map(n => `<div>${n}</div>`).join("");
    $odds.innerHTML = odds.map(n => `<div>${n}</div>`).join("");
    $evens.innerHTML = evens.map(n => `<div>${n}</div>`).join("");
  }

  // Add Number
  $form.addEventListener("submit", function (event) {
    event.preventDefault();
    let n = Number($form.number.value);
    addToBank(n);
    renderLists();
    $form.reset();
  });

  // Sort 1
  $form.querySelector("#sort1").addEventListener("click", function () {
    sortOne();
    renderLists();
  });

  // Sort All
  $form.querySelector("#sortAll").addEventListener("click", function () {
    while (numberBank.length) sortOne();
    renderLists();
  });

  return $form;
}








function render(){
   const $app = document.querySelector('#app');
   $app.innerHTML = "";
   $app.appendChild(NumberForm());




};

render();