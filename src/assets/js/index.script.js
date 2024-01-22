const buttonInit = document.querySelector("#buttonInit");
const buttonEnd = document.querySelector("#buttonEnd");
const buttonRestart = document.querySelector("#buttonRestart");
const sectionInit = document.querySelector("#sectionInit");
const sectionGame = document.querySelector("#sectionGame");
const sectionEnd = document.querySelector("#sectionEnd");
const gameForm = document.querySelector("#gameForm");
const labels = document.querySelectorAll(".labels");

const results = [];
const cases = [];
const answers = [];
let currentCase;
let currentLabelInput;

const stopPropagation = (e) => {
  e.stopPropagation();
};

const isMobile = (innerHeight, innerWidth) => {
  return innerHeight < 1000 && innerWidth < 1000;
};

const startGame = () => {
  sectionInit.classList.replace("show", "hide");
  document.body.style.height = isMobile(window.innerHeight, window.innerWidth)
    ? "100%"
    : "100vh";
  sectionGame.classList.replace("hide", "show");
  return;
};

const verifyGame = () => {
  let right = 0;
  let wrong = 0;
  const answerTemplate = ["A-4", "B-3", "C-2", "D-1"];

  answerTemplate.forEach((answer) => {
    if (results.includes(answer)) {
      right++;
    } else {
      wrong++;
    }
  });

  console.log("Right: ", right, "\n", "Wrong: ", wrong);

  sectionGame.classList.replace("show", "hide");
  document.body.style.height = "100vh";
  sectionEnd.classList.replace("hide", "show");
};

const restartGame = () => {
  window.location.reload();
};

const chooseCase = (_caseInput) => {
  currentCase = _caseInput.value;
};

const chooseAnswer = (answer) => {
  const [answerInput] = answer.getElementsByClassName("inputs");

  const [answerTitle] = answer.getElementsByClassName("basic_title");

  if (answerTitle.innerText === "--.") {
    answerTitle.innerText = `${currentCase}.`;
    results.push(`${currentCase}-${answerInput.value}`);
  }
};

labels.forEach((label, index) => {
  const [labelInput] = label.getElementsByClassName("inputs");

  if (index < 4) {
    cases.push(label);
  } else {
    answers.push(label);
  }

  labelInput.addEventListener("click", (e) => {
    stopPropagation(e);

    cases.forEach((_case) => {
      const [_caseInput] = _case.getElementsByClassName("inputs");

      if (_caseInput !== labelInput) {
        _case.style.background = "gray";
        _case.disabled = true;
        _case.hover = false;
      } else {
        _case.style.background = "white";
        chooseCase(_caseInput);
      }
    });
  });
});

answers.forEach((answer) => {
  answer.addEventListener("click", () => chooseAnswer(answer));
});

buttonInit.addEventListener("click", startGame);

buttonEnd.addEventListener("click", verifyGame);

buttonRestart.addEventListener("click", restartGame);
