//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector(`#btnTry`)
const btnAgain = document.querySelector(`#btnAgain`)

let numberAdv = Math.round(Math.random() * 10)
let attempt = 1

//Eventos
btnTry.addEventListener(`click`, handleTryClick) //adiciona o evento ou o listener (quem reage ao evento) | click = nome do evento , listener
btnAgain.addEventListener(`click`, handResetClick)
document.addEventListener(`keydown`, function(e) {
  if(e.key == "Enter"){
    handResetClick()
  }
})


//Funções
//callback - função que é passada como argumento de outra função
function handleTryClick(event) {
  event.preventDefault() //não faça evento padrão do botão que seria enviar o formulário

  const inputNumber = document.querySelector(`#inputNumber`)
  
  if(Number(inputNumber.value) == numberAdv){
    toggleScreen()
  
    screen2.querySelector("h2")
    .innerText = `Acertou em ${attempt} tentativa(s)`
  }

  inputNumber.value = ""
  attempt++
}

function handResetClick() {
  toggleScreen()
  attempt = 1
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
