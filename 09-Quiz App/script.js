const questions = [
    {
        questionText: "HTML stands for",
        options: ["Hyper Text Markup Language", "Hyper Translate Text Language", "Hypertension Language", "Hyper Mark Language"],
        answer: "Hyper Text Markup Language",
    },
    {
        questionText: "Which tag is used to create a Checkbox",
        options: ["<checkbox>", "<input type=\"checkbox\">", "<type=\"checkbox\"", "None of the Above"],
        answer: "<input type=\"checkbox\">",
    },
    {
        questionText: "HTML is a subset of",
        options: ["SGMD", "SGML", "SGMH", "None of the Above"],
        answer: "SGML"
    }
]

var time = 50;
var sec = 0;
var stopTimer = true;
var score = 0;
var i = 0;

const timeElement = document.getElementById("time");

const start = () => {
  stopTimer = false;
  setTimer();
  document.getElementById("landingPage").classList.add("hide");
  document.getElementById("quizPage").classList.remove("hide");

  setQuestions();
};

const setTimer = () => {
  if (sec >= 50) {
    timerEnd();
  }

  if (sec <= time && stopTimer !== true) {
    sec = parseInt(sec);
    sec += 1;
    timeElement.innerText = time - sec;
    setTimeout("setTimer()", 1000);
  } else {
    timerEnd();
  }
};

const timerEnd = () => {
  timeElement.innerText = 0;

  document.getElementById("quizPage").classList.add("hide");
  document.getElementById("timerOver").classList.remove("hide");
  document.getElementById("score").innerText = score;
};

const submitInitial = () => {
  const initials = document.getElementById("initials").value;
  localStorage.setItem("quiz " + initials, time);
  document.getElementById("landingPage").classList.remove("hide");
  document.getElementById("timerOver").classList.add("hide");
};

const setQuestions = () => {
  var question = document.getElementById("question");
  var one = document.getElementById("option1");
  var two = document.getElementById("option2");
  var three = document.getElementById("option3");
  var four = document.getElementById("option4");

  question.innerHTML = "<h2>" + questions[i].questionText + "</h2>";
  one.innerText = questions[i].options[0];
  two.innerText = questions[i].options[1];
  three.innerText = questions[i].options[2];
  four.innerText = questions[i].options[3];
  if (i == questions.length - 1) {
    stopTimer = true;
    timerEnd();
  }
};

const getElement = (e) => {
  var element = e.target || e.srcElement;
  var answer = element.innerText;
  if (answer === questions[i].answer) {
    document.getElementById("comment").classList.remove("hide");
    document.getElementById("comment").innerText = "Correct!";
    setTimeout(function () {
      document.getElementById("comment").innerText = "";
      document.getElementById("comment").classList.add("hide");
      i += 1;
      time += 1;
      score += 1;
      setQuestions();
    }, 1000);
  } else {
    document.getElementById("comment").classList.remove("hide");
    document.getElementById("comment").innerText = "Incorrect";

    time -= 10;
  }
};

const resetAll = () => {
  time = 50;
  sec = 0;
  score = 0;
  i = 0;
  stopTimer = true;
  document.getElementById("quizPage").classList.add("hide");
  document.getElementById("timerOver").classList.add("hide");
};

const getData = () => {
  document.getElementById("quizPage").classList.add("hide");
  document.getElementById("timerOver").classList.add("hide");

  document.getElementById("highscore").innerText = "";
  document.getElementById("highScoreContainer").classList.remove("hide");
  document.getElementById("landingPage").classList.add("hide");
  const allScores = localStorage;
  const element = document.getElementById("highscore");
  if (allScores.length === 0) {
    const element = document.getElementById("highscore");
    element.innerText = "No highscores found !";
  }
  for (var j = 0; j < allScores.length; j++) {
    const name = allScores.key(j).split(" ")[1];
    const time = allScores.getItem(allScores.key(j));
    var li = document.createElement("li");
    li.innerHTML = name + " - " + time;
    element.appendChild(li);
  }
};

const clearHighscore = () => {
  localStorage.clear();
};

const backBtn = () => {
  document.getElementById("highScoreContainer").classList.add("hide");
  document.getElementById("landingPage").classList.remove("hide");
};
