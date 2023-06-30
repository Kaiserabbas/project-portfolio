// Declaring Variables to get form inputs
const personName = document.querySelector('#personname');
const email = document.querySelector('#email');
const textArea = document.querySelector('#textarea');

// If data is eneterd previously and saved in local storage, retrieve it
const localSavedData = JSON.parse(localStorage.getItem('formSaved'));
// When the user loads the page, if there is any data in the local storage
// the input fields are pre-filled with this data.
if (localSavedData) {
  // Declaring variable and assinging values of object keys
  const localName = localSavedData.name;
  const localEmail = localSavedData.email;
  const localOpinion = localSavedData.opinion;

  // assigning keys the values from form inputs
  personName.value = localName;
  email.value = localEmail;
  textArea.value = localOpinion;
}
// function to preserve data in browser
function preserveData(event) {
  // This function prevent HTML refresh
  event.preventDefault();
  // Creating an object for form values to save later in local storage
  const formSavedData = {
    name: personName.value,
    email: email.value,
    opinion: textArea.value,
  };
  // converting data into string before saving into browser storage
  const json = JSON.stringify(formSavedData);
  // It will save the data to local storage
  localStorage.setItem('formSaved', json);
}
personName.addEventListener('input', preserveData);
email.addEventListener('input', preserveData);
textArea.addEventListener('input', preserveData);
