import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('[name="email"]');
const textareaEl = document.querySelector('[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

formEl.addEventListener('submit', onFormSubmit);

feedbackForm();

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);
  event.currentTarget.reset();
  if (textareaEl.value === '' && emailEl.value === '')
    localStorage.removeItem(STORAGE_KEY);
}

formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(event) {
  formData = {
    email: emailEl.value,
    message: textareaEl.value,
  };
  console.log(formData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function feedbackForm() {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (formData) {
    textareaEl.value = formData.message;
    emailEl.value = formData.email;
  }
}
