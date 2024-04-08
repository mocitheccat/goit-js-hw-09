// Get elements from the DOM
const formRef = document.querySelector('.feedback-form');
const email = formRef.querySelector('#email');
const message = formRef.querySelector('#message');

// check if we have some data in localstorage and set it to the form if data exists
window.addEventListener('load', () => {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData?.email) {
    email.value = formData.email;
  }
  if (formData?.message) {
    message.value = formData.message;
  }
});

// listen for changes in the form and save the data to localstorage
formRef.addEventListener('input', e => {
  if (
    e.target.nodeName.toLowerCase() !== 'input' &&
    e.target.nodeName.toLowerCase() !== 'textarea'
  ) {
    return;
  }

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: email.value.trim(),
      message: message.value.trim(),
    })
  );
});

// listen for the submit button and log the data to the console
formRef.addEventListener('submit', e => {
  e.preventDefault();
  const logFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log('Form data: ', logFormData);
  localStorage.removeItem('feedback-form-state');
  formRef.reset();
});
