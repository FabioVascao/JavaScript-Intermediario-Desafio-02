import Sounds from "./sounds.js"
import Timer from "./timer.js"
import Mode from "./mode.js"

const sound = Sounds()
const timer = Timer()
const mode = Mode()

const buttonPressForest = new Audio("https://github.com/FabioVascao/JavaScript-Intermediario-Desafio-01/blob/main/sounds/Floresta.wav?raw=true") 
const forestInput = forest.querySelector('input')

function adjustVolume() {
  buttonPressForest.volume = forestInput.value
}

forestInput.addEventListener('input', () => {
  adjustVolume()
})
