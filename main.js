// var _ = require('lodash');
// console.log(_);

const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById("gradient");

copyText = () => {
  const codeGradientCopy = document.querySelector('h3');
  console.log('codeGradientCopy.value');
};


// show the defalut colors on page load
loadBackgroundCode = () => {
  return setGradientColors;
};

// function that sets both color values
setGradientColors = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";
    css.textContent = body.style.background + ";";
};

window.onload = loadBackgroundCode();
// sets the color value of the first gradient
color1.addEventListener("input", setGradientColors);
// sets the color value of the second gradient
color2.addEventListener("input", setGradientColors);
// Show the vaule of the h3 element
css.addEventListener("click", copyText);
