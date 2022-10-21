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
const h1 = document.querySelector('h1');

function pressButtonMode() {
  buttonModeLight.classList.toggle('hide');
  buttonModeDark.classList.toggle('hide');
}

buttonModeLight.addEventListener('click', function() {
  pressButtonMode();
  const body = document.querySelector('body');
  body.style.backgroundColor = '#121214';
  buttonForest.classList.add('dark');
  buttonRain.classList.add('dark');
  buttonMarket.classList.add('dark');
  buttonFire.classList.add('dark');
  h1.classList.add('dark')
})

buttonModeDark.addEventListener('click', function() {
  pressButtonMode();
  const body = document.querySelector('body');
  body.style.backgroundColor = '#ffffff';
  buttonForest.classList.remove('dark');
  buttonRain.classList.remove('dark');
  buttonMarket.classList.remove('dark');
  buttonFire.classList.remove('dark');
  h1.classList.remove('dark');
})