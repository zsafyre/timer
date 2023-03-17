const hrElement = document.querySelector("#hr");
const minElement = document.querySelector("#min");
const secElement = document.querySelector("#sec");
const msecElement = document.querySelector("#msec");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resumebtn = document.querySelector("#resumebtn");
const resetbtn = document.querySelector("#resetbtn");

let interval;
let hr = 0;
let min = 0;
let sec = 0;
let msec = 0;
let isPaused = false;

startbtn.addEventListener("click", startTimer);
pausebtn.addEventListener("click", pauseTimer);
resumebtn.addEventListener("click", resumeTimer);
resetbtn.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      msec += 10;

      if (msec === 1000) {
        sec++;
        msec = 0;
      }
      if (sec === 60) {
        min++;
        sec = 0;
      }
      if (min === 60) {
        hr++;
        min = 0;
      }

      minElement.textContent = formatTime(min);
      secElement.textContent = formatTime(sec);
      msecElement.textContent = formatMsec(msec);
      hrElement.textContent = formatTime(hr);
    }
  }, 10);

  startbtn.style.display = "none";
  pausebtn.style.display = "block";
}

function pauseTimer() {
  isPaused = true;
  pausebtn.style.display = "none";
  resumebtn.style.display = "block";
}

function resumeTimer() {
  isPaused = false;
  pausebtn.style.display = "block";
  resumebtn.style.display = "none";
}

function resetTimer() {
  clearInterval(interval);
  hr = 0;
  min = 0;
  sec = 0;
  msec = 0;
  hrElement.textContent = "00";
  minElement.textContent = "00";
  secElement.textContent = "00";
  msecElement.textContent = "000";

  startbtn.style.display = "block";
  pausebtn.style.display = "none";
  resumebtn.style.display = "none";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMsec(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}
