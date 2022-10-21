import {
  buttonPlay,
  buttonStop,
  buttonUp,
  buttonDown,
  timerEnd,
  minutesDisplay,
  secondsDisplay,
  minutes,
  seconds
} from "./elements.js"

export default function Timer() {
    let timerTimeOut

    function updateDisplay(newMinutes, seconds) {
      newMinutes = newMinutes === undefined ? minutes : newMinutes;
      seconds = seconds === undefined ? 0 : seconds;
      minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
      secondsDisplay.textContent = String(seconds).padStart(2, "0");
    }

    function countdown() {
      timerTimeOut = setTimeout(function () {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        updateDisplay(minutes, 0)

        if (minutes <=0 && seconds <=0) {
          updateDisplay();
          timeEnd();
          return
        }

        if (seconds <=0) {
          seconds = 60
          --minutes
        }

        updateDisplay(minutes, seconds -1)

        countdown()
      }, 1000)
    }

    function hold() {
      clearTimeout(timerTimeOut);
    }

    function upMinutes(minutes) {
      let newMinutes = Number(minutesDisplay.textContent) + 5;
      updateDisplay(newMinutes, seconds);
    }

    function downMinutes(minutes) {
      let newMinutes = Number(minutesDisplay.textContent)
        if(newMinutes > 5) {
          let newMinutes = Number(minutesDisplay.textContent) - 5;
          updateDisplay(newMinutes, seconds);
        } else {
          alert(`Tempo já é menor que 5 minutos.`)
        }
    }

    function timeEnd() {
      timerEnd.play();
    }

    buttonPlay.addEventListener('click', function(){
      countdown();
    })

    buttonStop.addEventListener('click', function() {
      hold();
    })

    buttonUp.addEventListener('click', function(){
      upMinutes();
    })

    buttonDown.addEventListener('click', function(){
      downMinutes();
    })

    return {
      countdown,
      hold,
      updateDisplay,
      upMinutes,
      downMinutes,
      timeEnd
    }

  }