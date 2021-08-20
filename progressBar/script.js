// ** ----- PROGRESS BAR ----- ** //

const progressBar = document.querySelector("progress");
var progressBarValue = 0;

// ** ----- PROGRESS BAR CONTENT ----- ** //

var contentValue = progressBar.getAttribute("value");
var showProgress = document.querySelector("p");

// ** ----- PROGRESS BAR TITLE ----- ** //

const progressBarTitle = document.querySelector("h1");

// ** ----- BACKGROUND ----- ** //

const background = document.querySelector("body");
var backgroundColors = ["dark", "orange"];
background.classList.add(`bg-${backgroundColors[0]}`);

// ** ----- FUNCTIONS ----- ** //

function animationBar(speed, add) {
  if (add) {
    progressBarValue++;
  } else {
    progressBarValue = 0;
  }

  progressBar.setAttribute("value", progressBarValue);
  showProgress.innerHTML = `${progressBarValue}%`;
  setTimeout(() => {
    fillBar();
  }, speed);
}

function fillBar() {
  if (progressBarValue < 101) {
    animationBar(60, true);

    if (progressBarValue < 49) {
      progressBarTitle.innerText = "Carregando";
    } else if (progressBarValue < 89) {
      progressBarTitle.innerText = "Quase lá...";
    } else {
      progressBarTitle.innerText = "Concluído";
    }
  } else {
    if (background.classList.value === "bg-dark") {
      background.classList.remove(`bg-${backgroundColors[0]}`);
      background.classList.add(`bg-${backgroundColors[1]}`);
    } else {
      background.classList.remove(`bg-${backgroundColors[1]}`);
      background.classList.add(`bg-${backgroundColors[0]}`);
    }

    animationBar();
  }
}

fillBar();
