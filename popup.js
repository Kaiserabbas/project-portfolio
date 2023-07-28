/* eslint-disable no-plusplus */

// creation of popup container
const popup = document.createElement('div');
popup.setAttribute('id', 'popup');
popup.setAttribute('class', 'popup');

// Inserting popup container in document body
const parentPop = document.body;
parentPop.insertBefore(popup, parentPop.children[1]);
popup.style.display = 'none';

const mainProject = document.createElement('div');
mainProject.setAttribute('class', 'popup-project');
popup.appendChild(mainProject);

const closeButton = document.createElement('div');
closeButton.setAttribute('class', 'closex');
closeButton.innerHTML = '&times;';
mainProject.append(closeButton);

const projectHeading = document.createElement('h1');
projectHeading.setAttribute('class', 'popup-heading');
mainProject.appendChild(projectHeading);
projectHeading.innerText = 'To-Do List';

const projectSubDetails = document.createElement('p');
projectSubDetails.setAttribute('class', 'popup-sub-details');
mainProject.appendChild(projectSubDetails);
projectSubDetails.innerText = 'To-Do List Application';

const faIcon1 = document.createElement('i');
faIcon1.setAttribute('class', 'circle fa-solid fa-circle');
projectSubDetails.appendChild(faIcon1);

const projectTitle = document.createElement('span');
projectTitle.setAttribute = ('class', 'popup-title');
projectSubDetails.appendChild(projectTitle);
projectTitle.innerText = 'Daily Tasks List';

const faIcon2 = document.createElement('i');
faIcon2.setAttribute('class', 'circle fa-solid fa-circle');
projectSubDetails.appendChild(faIcon2);

const projectYear = document.createElement('span');
projectYear.setAttribute('class', 'popup-year');
projectSubDetails.appendChild(projectYear);
projectYear.innerText = '2023';

const projectImage = document.createElement('div');
projectImage.setAttribute('class', 'popup-image');
mainProject.appendChild(projectImage);

const projectImg2 = document.createElement('img');
projectImg2.setAttribute('alt', 'Project-1');
projectImg2.setAttribute('class', 'img-2');
projectImg2.src = './public/11.png';
projectImage.appendChild(projectImg2);

const projectData = document.createElement('div');
projectData.setAttribute('class', 'popup-data');
mainProject.appendChild(projectData);

const projectParagraph = document.createElement('p');
projectParagraph.setAttribute('class', 'popup-paragraph');
projectData.appendChild(projectParagraph);
projectParagraph.innerText =
  'The To-Do List Application is a simple web-based task management tool that allows users to create, view, edit, and delete tasks. This application is designed to help individuals organize their tasks and keep track of their daily activities. This is a simple web application that allows you to manage your to-do list. You can add, edit, and remove tasks as needed. The application is built using HTML, CSS, and JavaScript';

const projectListButton = document.createElement('div');
projectListButton.setAttribute('class', 'popup-list-button');
projectData.appendChild(projectListButton);

const projectUl = document.createElement('ul');
projectUl.setAttribute('class', 'popup-list');
const languages = ['HTML', 'CSS', 'JavaScript', 'Rugby', 'Bootstrap'];

// Inserting elements in project-data Ul div --> li

for (let i = 0; i < languages.length; i++) {
  const listItem = document.createElement('li');
  listItem.setAttribute('class', 'lang-li');
  listItem.textContent = languages[i];
  projectUl.appendChild(listItem);
}
projectListButton.append(projectUl);

// Inserting elements in project data --> button
const lastButton = document.createElement('div');
lastButton.setAttribute('class', 'last-button');
projectListButton.append(lastButton);

const projectButton1 = document.createElement('button');
projectButton1.setAttribute('type', 'button');
projectButton1.setAttribute('class', 'btn');
const seeLiveLink = document.createElement('a');
seeLiveLink.setAttribute(
  'href',
  'https://rawcdn.githack.com/Kaiserabbas/myday-todo/41c6fcd29c0191896ed4532e3911319e5bdb14e2/dist/index.html'
);
seeLiveLink.innerText = 'See live';
projectButton1.append(seeLiveLink);
const seeLive = document.createElement('img');
seeLive.setAttribute('alt', '');
seeLive.setAttribute('class', 'btn-1-img');
seeLive.src = './public/arrow-up.png';
projectButton1.append(seeLive);
lastButton.append(projectButton1);

const projectButton2 = document.createElement('button');
projectButton2.setAttribute('type', 'button');
projectButton2.setAttribute('class', 'btn');
const seeSourceLink = document.createElement('a');
seeSourceLink.setAttribute('href', 'https://github.com/Kaiserabbas/myday-todo');
seeSourceLink.innerText = 'See Source';
projectButton2.append(seeSourceLink);
const seeSource = document.createElement('img');
seeSource.setAttribute('alt', 'see source');
seeSource.setAttribute('class', 'btn-2-img');
seeSource.src = './public/SVG-1.svg';
projectButton2.append(seeSource);
lastButton.append(projectButton2);

function hidePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}
closeButton.addEventListener('click', hidePopup);
