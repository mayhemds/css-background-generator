var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById("gradient");

function copyText(){
  var codeGradientCopy = document.querySelector('h3');
  console.log('codeGradientCopy.value');
  // codeGradientCopy.select();
  // document.execCommand("copy");
  // alert("Copied the text" + codeGradientCopy.value);
};


// show the defalut colors on page load
function loadBackgroundCode(){
  return setGradientColors;
};

// function that sets both color values
function setGradientColors() {
    body.style.background = "linear-gradient(to right, "+ color1.value + ", "+ color2.value + ")";
    css.textContent = body.style.background + ";";
};

window.onload = loadBackgroundCode();
// sets the color value of the first gradient
color1.addEventListener("input", setGradientColors);
// sets the color value of the second gradient
color2.addEventListener("input", setGradientColors);

css.addEventListener("click", copyText);
