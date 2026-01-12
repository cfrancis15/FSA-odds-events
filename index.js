
let numberBank = []

function addToBank(n){
    numberBank.push(n)
    console.log(numberBank)
    return numberBank
    
}

function NumberForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
        Add numbers to our list and sort them out!
      <input name="number" type="number" />
    </label>
    <button>Add Number</button>
    <button>Sort 1</button>
    <button>Sort All</button>
    <h2>Bank</h2>
    <section class='section'></section>


  `;
    const $section = $form.querySelector(".section")



  $form.addEventListener("submit",function (event){
    event.preventDefault()
    let formData = new FormData($form)
    let n = Number(formData.get("number"))
    addToBank(n)
    $section.replaceChildren(...numberBank );
    

})
  return $form;
}

/////////////////////////////////////Good above this line


function Sort1(){
    const $sort1 = document.createElement('sort1')
    $sort1.innerHTML = `
        <h2>Odds</h2>
        <section class='section'></section>
    `

    return $sort1

    //add event listener to sort based on button press in other function

}






function render(){
    const $app = document.querySelector("#app");
    $app.innerHTML = `
    <main>

    <h1>Odds and Events</h1>
    <NumberForm></NumberForm>
    <Sort1></Sort1>


    </main>
  `;

    $app.querySelector("NumberForm").replaceWith(NumberForm());
    $app.querySelector("Sort1").replaceWith(Sort1());




};

render();