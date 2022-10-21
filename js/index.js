import Sounds from "./sounds.js"
import Timer from "./timer.js"
import Mode from "./mode.js"

const sound = Sounds()
const timer = Timer()
const mode = Mode()

const buttonPressForest = new Audio("https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Floresta.wav?raw=true")
let volumeForest = document.querySelector('#volumeForest');
let x = Number(volumeForest)
console.log(x)

function volumeInput() { 
   if( buttonPressForest.volume < 1) {
     buttonPressForest.volume += 0.1;
} 
    if( buttonPressForest.volume > 0)  { buttonPressForest.volume -= 0.1;
}
  console.log(volumeForest)
}

volumeForest.addEventListener("input", volumeInput);