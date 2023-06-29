// Variables
const form = document.querySelector('form');
// Adding event Listener to form variable
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // defining variabled for built in FormData
  const formData = new FormData(form);    
  // defining variable for obejct to get enteries from FormData
  const object = Object.fromEntries(formData);

  // converting object into string
  const stringObject= JSON.stringify(object);
  // setting local storage 
  localStorage.setItem('form', stringObject);

  //page creation where we can confirm data
  window.location.href = './form-data-check.html';
});