var btn = document.getElementById('btn');

btn.addEventListener('click', setColor);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showColor(a, b, c){
  var arrOfArgs = Array.from(arguments); 
  arrOfArgs.forEach(function(arg){
    if (arg.length === 1) {
      arg = '0' + arg;
    }
  })
  var colorText = document.getElementById('currentColor');
  colorText.innerText = '#' + a + b + c;
}

function setColor(){
  var rColor = getRandomIntInclusive(0, 255).toString(16);
  var gColor = getRandomIntInclusive(0, 255).toString(16);
  var bColor = getRandomIntInclusive(0, 255).toString(16);

  showColor(rColor, gColor, bColor);

  document.body.style.background = '#' + rColor + gColor + bColor;
}

setColor();
