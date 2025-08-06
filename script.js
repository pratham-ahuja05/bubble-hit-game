let timer = 60;
let score = 0;
let hitrn = 0;
let timerInterval;

function makebubble() {
  let clutter = "";
  for (let i = 1; i <= 308; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function incScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function updateTimerBar() {
  const percent = (timer / 60) * 100;
  document.querySelector("#timer-bar").style.width = percent + "%";
}

function runtimer() {
  timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
      updateTimerBar();
    } else {
      clearInterval(timerInterval);
      document.querySelector("#pbtm").innerHTML = "<h1>GAME OVER</h1>";
      document.querySelector("#restart").style.display = "inline-block";
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  if (dets.target.classList.contains("bubble")) {
    const clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
  dets.target.classList.add("clicked");
  incScore();
  
  
  setTimeout(() => {
    makebubble();
    getNewHit();
  }, 200);
}

  }
});

document.querySelector("#restart").addEventListener("click", function () {
  score = 0;
  timer = 60;
  document.querySelector("#scoreval").textContent = score;
  document.querySelector("#timerval").textContent = timer;
  document.querySelector("#restart").style.display = "none";
  updateTimerBar();
  makebubble();
  getNewHit();
  runtimer();
});


function startCountdown() {
  let count = 3;
  const countdownDiv = document.querySelector("#countdown");
  countdownDiv.textContent = count;
  let countdownInterval = setInterval(() => {
    count--;
    if (count === 0) {
      countdownDiv.textContent = "Go!";
    } else if (count < 0) {
      clearInterval(countdownInterval);
      countdownDiv.textContent = "";
      makebubble();
      getNewHit();
      runtimer();
    } else {
      countdownDiv.textContent = count;
    }
  }, 1000);
}


startCountdown();
