let interval = null;
let secondsCount = 0;

const start_btn = document.getElementById("startStopWatch");
const stop_btn = document.getElementById("pauseStopWatch");
const reset_btn = document.getElementById("resetStopWatch");

var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

start_btn.addEventListener("click", startStopWatch);
stop_btn.addEventListener("click", pauseStopWatch);
reset_btn.addEventListener("click", resetStopWatch);

function stopWatch() {
  secondsCount++;

  let hrs = Math.floor(secondsCount / 3600);
  let mins = Math.floor((secondsCount - hrs * 3600) / 60);
  let secs = secondsCount % 60;

  if (hrs < 10) {
    hrs = "0" + hrs;
  }

  if (mins < 10) {
    mins = "0" + mins;
  }

  if (secs < 10) {
    secs = "0" + secs;
  }

  hours.innerHTML = `${hrs}`;
  minutes.innerHTML = `${mins}`;
  seconds.innerHTML = `${secs}`;
}

function startStopWatch() {
  $("#pauseStopWatch").removeAttr("disabled");
  $("#resetStopWatch").removeAttr("disabled");
  $("#startStopWatch").attr({ disabled: "disabled" });

  if (interval) {
    return;
  }

  interval = setInterval(stopWatch, 1000);
}

function pauseStopWatch() {
  $("#startStopWatch").removeAttr("disabled");
  $("#pauseStopWatch").attr({ disabled: "disabled" });

  clearInterval(interval);
  interval = null;
}

function resetStopWatch() {
  $("#startStopWatch").removeAttr("disabled");
  $("#resetStopWatch").attr({ disabled: "disabled" });
  $("#pauseStopWatch").attr({ disabled: "disabled" });

  clearInterval(interval);
  interval = null;
  secondsCount = 0;
  hours.innerHTML = "00";
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
}
