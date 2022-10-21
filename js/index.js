import {
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
  seconds
} from "./elements.js"

import Sounds from "./sounds.js"
import Timer from "./timer.js"

const sound = Sounds()
const timer = Timer()

const buttonModeLight = document.querySelector('.mode')
const buttonModeDark = document.querySelector('.mode2')

function pressButtonMode() {
  buttonModeLight.classList.toggle('hide');
  buttonModeDark.classList.toggle('hide');
}

buttonModeLight.addEventListener('click', function() {
  pressButtonMode();
})

buttonModeDark.addEventListener('click', function() {
  pressButtonMode();
})