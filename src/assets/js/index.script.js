const buttonInit = document.querySelector("#buttonInit");
const buttonEnd = document.querySelector("#buttonEnd");
const buttonRestart = document.querySelector("#buttonRestart");
const sectionInit = document.querySelector("#sectionInit");
const sectionGame = document.querySelector("#sectionGame");
const sectionEnd = document.querySelector("#sectionEnd");
const gameForm = document.querySelector("#gameForm");
const firstOption = document.querySelector("#option1")
const isMobile = (innerHeight) => {
    return innerHeight < 900 ? true : false;
  };
const startGame = () => {
  sectionInit.classList.replace("show", "hide");
  document.body.style.height = isMobile(window.innerHeight)? "100%" : "100vh"
  document.getElementsByClassName("main_section_game_form_answers")[0].style.height = !isMobile(window.innerHeight)? "45vh" : "100%"
  sectionGame.classList.replace("hide", "show");
  return;
};


const verifyGame = () => {
  sectionGame.classList.replace("show", "hide");
  document.body.style.height = "100vh"
  sectionEnd.classList.replace("hide", "show");
  return;
};

const restartGame = () => {
  sectionEnd.classList.replace("show", "hide");
  document.body.style.height = isMobile(window.innerHeight)? "100%" : "100vh"
  sectionGame.classList.replace("hide", "show");
  return;
};

const chooseOption = () => {
  firstOption.className = "selected"
}

buttonInit.addEventListener("click", startGame);

buttonEnd.addEventListener("click", verifyGame);

buttonRestart.addEventListener("click", restartGame);
