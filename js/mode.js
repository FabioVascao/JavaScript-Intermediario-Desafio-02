import {
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire,
  buttonModeLight,
  buttonModeDark,
  h1
} from "./elements.js"

export default function Mode() {

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

  return {
    pressButtonMode
  }
}