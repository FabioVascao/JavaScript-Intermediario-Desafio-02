import Sounds from "./sounds.js"
import Timer from "./timer.js"
import Mode from "./mode.js"
import {
  buttonPressForest,
  buttonPressRain,
  buttonPressMarket,
  buttonPressFire,
} from "./elements.js"

const sound = Sounds()
const timer = Timer()
const mode = Mode()

let forestInput = document.querySelector('#volForest')
let marketInput = document.querySelector('#volMarket')
let rainInput = document.querySelector('#volRain')
let fireInput = document.querySelector('#volFire')

forestInput.addEventListener('input', () => {
  let forestVolume = Number(forestInput.value) / 100;
  buttonPressForest.volume = forestVolume;
})

marketInput.addEventListener('input', () => {
  let marketVolume = Number(marketInput.value) / 100;
  buttonPressMarket.volume = marketVolume;
})

rainInput.addEventListener('input', () => {
  let rainVolume = Number(rainInput.value) / 100;
  buttonPressRain.volume = rainVolume;
})

fireInput.addEventListener('input', () => {
  let fireVolume = Number(fireInput.value) / 100;
  buttonPressFire.volume = fireVolume;
})
