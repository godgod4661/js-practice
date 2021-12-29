const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const btn = document.querySelector('.btn')
const form = document.querySelector('#form')

function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(input => {
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

// Check input length
function checkLength(input,min,max){
  if(input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if(input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showSuccess(input)
  }
}

// Check passwords match
function checkPasswordMatch(input1, input2) {
  if(input1.value !== input2.value){
    showError(input2, 'Passwords do not match!');
  }
}

// Get fieldname
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e){
  e.preventDefault();

  checkRequired([username,email,password,password2]);
  checkLength(username,3,15);
  checkLength(password,6,20);
  checkPasswordMatch(password,password2)
})