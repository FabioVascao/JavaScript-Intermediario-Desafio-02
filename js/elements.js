/* Variáveis pro Sound */

const buttonForest = document.querySelector('#forest') /* Seleciona o id Forest pro buttonForest */
const buttonRain = document.querySelector('#rain')
const buttonMarket = document.querySelector('#market')
const buttonFire = document.querySelector('#fire')

const buttonPressForest = new Audio("https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Floresta.wav?raw=true") /* Seleciona a música do github para o buttonPressForest */
const buttonPressRain = new Audio('https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Chuva.wav?raw=true')
const buttonPressMarket = new Audio('https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Cafeteria.wav?raw=true')
const buttonPressFire = new Audio('https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Lareira.wav?raw=true')
const timerEnd = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")


/* Variáveis pro Timer */

const buttonPlay = document.querySelector('#play') /* Seleciona o id Play pro buttonPlay */
const buttonStop = document.querySelector('#stop')
const buttonUp = document.querySelector('#up')
const buttonDown = document.querySelector('#down')

const minutesDisplay = document.querySelector('#minutes') /* Seleciona os minutos do HTML para minutesDisplay como caractere*/
const secondsDisplay = document.querySelector('#seconds')
let minutes = Number(minutesDisplay.textContent) /* Transforma o 25 de caractere para Número na variável minutes*/
let seconds = Number(secondsDisplay.textContent)

const buttonModeLight = document.querySelector('.mode') /* Variáveis para o light e dark mode */
const buttonModeDark = document.querySelector('.mode2')
const h1 = document.querySelector('h1');

let forestInput = document.querySelector('#volForest') /* Volume de cada música dentro dos input*/
let marketInput = document.querySelector('#volMarket')
let rainInput = document.querySelector('#volRain')
let fireInput = document.querySelector('#volFire')

/* Exporta as variáveis para outros documentos, sempre adicionar no export*/ 
export {
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire,
  buttonPressForest,
  buttonPressRain,
  buttonPressMarket,
  buttonPressFire,
  timerEnd,
  buttonPlay,
  buttonStop,
  buttonUp,
  buttonDown,
  minutesDisplay,
  secondsDisplay,
  minutes,
  seconds,
  buttonModeLight,
  buttonModeDark,
  h1,
  forestInput,
  marketInput,
  rainInput,
  fireInput
}