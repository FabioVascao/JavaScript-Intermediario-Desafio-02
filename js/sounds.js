/* Importando as váriaveis do arquivo elements.js*/
import {
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire,
  buttonPressForest,
  buttonPressRain,
  buttonPressMarket,
  buttonPressFire,
} from "./elements.js"

export default function() {

function pressButtonForest() { /* Apertar no ícone e mudar o background e tocar a música no Forest */
  buttonForest.classList.add('select');
  buttonRain.classList.remove('select');
  buttonMarket.classList.remove('select');
  buttonFire.classList.remove('select');
  buttonPressForest.play();
  buttonPressRain.pause();
  buttonPressMarket.pause();
  buttonPressFire.pause();
}

function pressButtonRain(){
  buttonForest.classList.remove('select');
  buttonRain.classList.add('select');
  buttonMarket.classList.remove('select');
  buttonFire.classList.remove('select');
  buttonPressRain.play();
  buttonPressForest.pause();
  buttonPressMarket.pause();
  buttonPressFire.pause();
}

function pressButtonMarket(){
  buttonForest.classList.remove('select');
  buttonRain.classList.remove('select');
  buttonMarket.classList.add('select');
  buttonFire.classList.remove('select');
  buttonPressMarket.play();
  buttonPressRain.pause();
  buttonPressForest.pause();
  buttonPressFire.pause();
}

function pressButtonFire(){
  buttonForest.classList.remove('select');
  buttonRain.classList.remove('select');
  buttonMarket.classList.remove('select');
  buttonFire.classList.add('select');
  buttonPressFire.play();
  buttonPressRain.pause();
  buttonPressMarket.pause();
  buttonPressForest.pause();
}

buttonForest.addEventListener('click', function(){  /* Função para executar quando clicado no Forest */
  pressButtonForest();
})

buttonRain.addEventListener('click', function(){ 
  pressButtonRain();
})

buttonMarket.addEventListener('click', function(){ 
  pressButtonMarket();
})

buttonFire.addEventListener('click', function(){ 
  pressButtonFire();
})

}

