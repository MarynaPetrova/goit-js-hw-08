import throttle from 'lodash.throttle';

const LS_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(handleInput, 500));
form.addEventListener('submit', handleSubmit);
const { email, message } = form.elements;

let formData = JSON.parse(localStorage.getItem(LS_KEY));
if (formData) {
  email.value = formData.email;
  message.value = formData.message;
}

function handleInput() {
  formData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();
  if (!email.value || !message.value) {
    alert('Потрібно заповнити всі поля!');
    return;
  }
  console.log(JSON.parse(localStorage.getItem(LS_KEY)));
  localStorage.removeItem(LS_KEY);
  event.currentTarget.reset();
}