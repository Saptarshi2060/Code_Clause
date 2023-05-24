// Timer
const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds');
const timerStartButton = document.getElementById('timer-start');
const timerStopButton = document.getElementById('timer-stop');
const timerResetButton = document.getElementById('timer-reset');

let timerInterval;
let timerDuration = 0;

function updateTimerDisplay() {
  const minutes = Math.floor(timerDuration / 60);
  const seconds = timerDuration % 60;
  timerMinutes.textContent = String(minutes).padStart(2, '0');
  timerSeconds.textContent = String(seconds).padStart(2, '0');
}

timerStartButton.addEventListener('click', () => {
  timerInterval = setInterval(() => {
    timerDuration += 1;
    updateTimerDisplay();
  }, 1000);
});

timerStopButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerDuration = parseInt(timerMinutes.textContent) * 60 + parseInt(timerSeconds.textContent);
});

timerResetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerDuration = 0;
  updateTimerDisplay();
});

// Stopwatch
const stopwatchMinutes = document.getElementById('stopwatch-minutes');
const stopwatchSeconds = document.getElementById('stopwatch-seconds');
const stopwatchMilliseconds = document.getElementById('stopwatch-milliseconds');
const stopwatchStartButton = document.getElementById('stopwatch-start');
const stopwatchStopButton = document.getElementById('stopwatch-stop');
const stopwatchResetButton = document.getElementById('stopwatch-reset');

let stopwatchInterval;
let stopwatchStartTime;
let stopwatchDuration = 0;

function updateStopwatchDisplay() {
  const minutes = Math.floor(stopwatchDuration / 60000);
  const seconds = Math.floor((stopwatchDuration % 60000) / 1000);
  const milliseconds = stopwatchDuration % 1000;
  stopwatchMinutes.textContent = String(minutes).padStart(2, '0');
  stopwatchSeconds.textContent = String(seconds).padStart(2, '0');
  stopwatchMilliseconds.textContent = String(milliseconds).padStart(3, '0');
}

stopwatchStartButton.addEventListener('click', () => {
  stopwatchStartTime = Date.now() - stopwatchDuration;
  stopwatchInterval = setInterval(() => {
    stopwatchDuration = Date.now() - stopwatchStartTime;
    updateStopwatchDisplay();
  }, 10);
});

stopwatchStopButton.addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  stopwatchDuration = parseInt(stopwatchMinutes.textContent) * 60000 + parseInt(stopwatchSeconds.textContent) * 1000 + parseInt(stopwatchMilliseconds.textContent);
});

stopwatchResetButton.addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  stopwatchDuration = 0;
  updateStopwatchDisplay();
});
