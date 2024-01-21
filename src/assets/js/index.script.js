const buttonInit = document.querySelector("#buttonInit");
const buttonEnd = document.querySelector("#buttonEnd");
const buttonRestart = document.querySelector("#buttonRestart");
const sectionInit = document.querySelector("#sectionInit");
const sectionGame = document.querySelector("#sectionGame");
const sectionEnd = document.querySelector("#sectionEnd");
const gameForm = document.querySelector("#gameForm");
const firstOption = document.querySelector("#option1");
const isMobile = (innerHeight, innerWidth) => {
  return (innerHeight < 1000 && innerWidth < 1000);
};

const isTablet = () => {

}

const startGame = () => {
  sectionInit.classList.replace("show", "hide");
  document.body.style.height = isMobile(window.innerHeight, window.innerWidth)
    ? "100%"
    : "100vh";
  sectionGame.classList.replace("hide", "show");
  return;
};

const verifyGame = () => {
  sectionGame.classList.replace("show", "hide");
  document.body.style.height = "100vh";
  sectionEnd.classList.replace("hide", "show");
  return;
};

const restartGame = () => {
  sectionEnd.classList.replace("show", "hide");
  document.body.style.height = isMobile(window.innerHeight, window.innerWidth) ? "100%" : "100vh";
  sectionGame.classList.replace("hide", "show");
  return;
};

const chooseOption = () => {
  firstOption.className = "selected";
};

buttonInit.addEventListener("click", startGame);

buttonEnd.addEventListener("click", verifyGame);

buttonRestart.addEventListener("click", restartGame);
