const form = document.querySelector('[name="verify"]');
const inputs = form.querySelectorAll('.inputs input');

function handleInput(e) {
  const input = e.target;
  // check for data that was inputted and if there is a next input, focus it
  if (input.nextElementSibling && input.value) {
    input.nextElementSibling.focus();
  }
  // if the user cleared the input field, focus the preceding input (if it exists)
  // *might be worth considering to achieve this with a keyup event listener
  else if (input.previousElementSibling && !input.value) {
  	input.previousElementSibling.focus();
  }
}

function handlePaste(e) {
  const paste = e.clipboardData.getData('text');
  // loop over each input, and populate with the index of that string
  inputs.forEach((input, i) => {
    console.log(input);
    input.value = paste[i] || '';
  });
}

inputs[0].addEventListener('paste', handlePaste);

form.addEventListener('input', handleInput);

// 1. select the text when the next input is focued
// 2. Auto submit the form if all fields are filled after a paste