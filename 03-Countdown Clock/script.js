var countdownElement = document.getElementById("countdown");

var countdownVal = countdownElement.innerHTML;

var interval = setInterval(function () {
  countdownVal = countdownVal > 0 ? countdownVal - 1 : 0;
  countdownElement.innerHTML = countdownVal;
  if (countdownVal <= 3) {
      
  }
}, 1000);
