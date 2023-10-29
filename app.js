const hexInputElement = document.getElementById('hexInput');
const inputColorElement = document.getElementById('inputColor');
const alteredColorElement = document.getElementById('alteredColor');
const alteredColorText = document.getElementById('alteredColorText');

const sliderElement = document.getElementById('slider');
const sliderTextElement = document.getElementById('sliderText');

const lightenTextElement = document.getElementById('lightenText');
const darkenTextElement = document.getElementById('darkenText');
const toggleBtnElement = document.getElementById('toggleBtn');



//CHALLENGE
//Get a reference to hexInput and inputColor DOM elements
//Create a keyup event handler for hexInput
//Check if hex color is valid
//If hex color is valid, update the background color of inputColor
hexInputElement.addEventListener('keyup', () => {
  const hex = hexInputElement.value;
  if (!isValidHex(hex)) return;

  const strippedHex = hex.replace('#', '')

  inputColorElement.style.backgroundColor = "#" + strippedHex;
  reset()
})

toggleBtnElement.addEventListener('click', () => {
  if (toggleBtnElement.classList.contains('toggled')) {
    toggleBtnElement.classList.remove('toggled');
    lightenTextElement.classList.remove('unselected');
    darkenTextElement.classList.add('unselected');
  } else {
    toggleBtnElement.classList.add('toggled');
    lightenTextElement.classList.add('unselected');
    darkenTextElement.classList.remove('unselected');
  }
  reset();
})

sliderElement.addEventListener('input', () => {
  if (!isValidHex(hexInputElement.value)) return;

  sliderTextElement.textContent = `${sliderElement.value}%`;
  // calculate the appropriate value for the color alteration
  // between positive and negative
  const valueAddition =
    toggleBtn.classList.contains('toggled') ?
      -slider.value
      : slider.value;

  const alteredHex = alterColor(hexInputElement.value, valueAddition)
  alteredColorElement.style.backgroundColor = alteredHex;
  alteredColorText.innerText = `Altered Color: ${alteredHex}`;
})


// check to see whether the input from the user is a valid hex color
// 1. user can input text color including hashtag 
// 2. check the length - should be either 3 or 6 characters
const isValidHex = (hex) => {
  if (!hex) return false;

  // if (hex.startsWith("#")) {
  //     const strippedHex = hex.substring(1)
  // }

  const strippedHex = hex.replace('#', '')
  return strippedHex.length === 3 || strippedHex.length === 6;

}

//Create a function to convert Hex to RGB
//this should work with 3 or 6 character hex values
//Hint - useParseInt(16) to convert a hex value to a decimal value
//should return an object with 3 properties - r,g, and b
//Test your function with a few different use 