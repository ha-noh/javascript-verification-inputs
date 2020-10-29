const form = document.querySelector('[name="verify"]');
const inputs = form.querySelectorAll('.inputs input');

function handleInput(e) {
  const input = e.target;
  // check for data that was inputted and if there is a next input, focus it
  if (input.nextElementSibling && input.value) {
    input.nextElementSibling.focus();
  }
}

function handlePaste(e) {
  const paste = e.clipboardData.getData('text');

  // loop over each input, and populate with the index of that string
  inputs.forEach((input, i) => {
    input.value = paste[i] || '';
  });

  // if all inputs are filled at once, submit form
  const len = inputs.length;
  if(inputs[len-1].value) {
    const submitButton = document.querySelector('form [type="submit"]');
    submitButton.focus();
    setTimeout(() => submitButton.click(), 250);
  }
}

function handleKeyup(e) {
	const key = e.keyCode;
	const target = e.target;
	//if backspace was pressed on an input element, focus its preceding sibling (if it exists)
	if (key == 8 && target.tagName === 'INPUT' && target.previousElementSibling) {
		//delete the target input's value first before focusing because of when the keydown event triggers
		// target.value = '';
		target.previousElementSibling.focus();
	}
}

inputs[0].addEventListener('paste', handlePaste);

form.addEventListener('input', handleInput);

/* using the keydown event would allow the user to hold backspace to clear multiple inputs, 
 * but fixing that behavior for a single tap is complicated
 */
form.addEventListener('keyup', handleKeyup);

// 1. select the text when the next input is focued