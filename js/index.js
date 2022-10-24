import Sounds from "./sounds.js"
import Timer from "./timer.js"
import Mode from "./mode.js"

const sound = Sounds()
const timer = Timer()
const mode = Mode()

const forestAudio = new Audio('./sounds/Floresta.wav')
const forestVolume = forest.querySelector('input')


function adjustVolume(sound, volume) {
  sound.volume = volume
}

forestVolume.addEventListener('input', () => {
  adjustVolume(forestAudio, forestVolume.value)
})
