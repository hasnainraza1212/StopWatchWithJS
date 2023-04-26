// let timerInterval;
// let timer = [0, 0, 0];

// function startTimer() {
//   timerInterval = setInterval(updateTimer, 1000);
// }

// function updateTimer() {
//   timer[2]++;
//   if (timer[2] === 60) {
//     timer[2] = 0;
//     timer[1]++;
//   }
//   if (timer[1] === 60) {
//     timer[1] = 0;
//     timer[0]++;
//   }
//   document.getElementById("timer").innerHTML = timer
//     .map((value) => value.toString().padStart(2, "0"))
//     .join(":");
// }

// function stopTimer() {
//   clearInterval(timerInterval);
// }

// function resetTimer() {
//   clearInterval(timerInterval);
//   timer = [0, 0, 0];
//   document.getElementById("timer").innerHTML = "00:00:00";
// }










let stopwatchInterval;
let stopwatch = [0, 0, 0];

function startStopwatch() {
  stopwatchInterval = setInterval(updateStopwatch, 10);
}

function updateStopwatch() {
  stopwatch[2]++;
  if (stopwatch[2] === 100) {
    stopwatch[2] = 0;
    stopwatch[1]++;
  }
  if (stopwatch[1] === 60) {
    stopwatch[1] = 0;
    stopwatch[0]++;
  }
  document.getElementById("stopwatch").innerHTML = stopwatch
    .map((value) => value.toString().padStart(2, "0"))
    .join(":");
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatch = [0, 0, 0];
  document.getElementById("stopwatch").innerHTML = "00:00:00";
}

