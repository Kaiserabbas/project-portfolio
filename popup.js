/* eslint-disable no-plusplus */

// creation of popup container
const popup = document.createElement('div');
popup.setAttribute = ('id', 'popup');
popup.setAttribute = ('class', 'popup');

// Inserting popup container in document body
const parent = document.body;
parent.insertBefore(popup, parent.children[1]);
popup.style.display = 'none';

const mainProject = document.createElement('div');
mainProject.setAttribute('class', 'popup-project');
popup.appendChild(mainProject);

const closeButton = document.createElement('div');
closeButton.setAttribute = ('class', 'closex');
closeButton.innerHTML = '&times;';
mainProject.append(closeButton);

const projectHeading = document.createElement('h1');
projectHeading.setAttribute('class', 'popup-heading');
mainProject.appendChild(projectHeading);
projectHeading.innerText = 'Tonic';

const projectSubDetails = document.createElement('p');
projectSubDetails.setAttribute = ('class', 'popup-sub-details');
mainProject.appendChild(projectSubDetails);
projectSubDetails.innerText = 'CANOPY';

const faIcon1 = document.createElement('i');
faIcon1.setAttribute = ('class', 'circle fa-solid fa-circle');
projectSubDetails.appendChild(faIcon1);

const projectTitle = document.createElement('span');
projectTitle.setAttribute = ('class', 'popup-title');
projectSubDetails.appendChild(projectTitle);
projectTitle.innerText = 'Back End Dev';

const faIcon2 = document.createElement('i');
faIcon2.setAttribute = ('class', 'circle fa-solid fa-circle');
projectSubDetails.appendChild(faIcon2);

const projectYear = document.createElement('span');
projectYear.setAttribute = ('class', 'popup-year');
projectSubDetails.appendChild(projectYear);
projectYear.innerText = '2015';

const projectImage = document.createElement('div');
projectImage.setAttribute = ('class', 'popup-image');
mainProject.appendChild(projectImage);

// const projectImg1 = document.createElement('img');
// projectImg1.setAttribute = ('alt', 'Project-2');
// projectImg1.setAttribute = ('class', 'img-1');
// projectImg1.src = './public/Snapshoot Portfolio.png';
// projectImage.appendChild(projectImg1);

const projectImg2 = document.createElement('img');
projectImg2.setAttribute = ('alt', 'Project-1');
projectImg2.setAttribute = ('class', 'img-2');
projectImg2.src = './public/Snapshoot Portfolio-Desktop.png';
projectImage.appendChild(projectImg2);

const projectData = document.createElement('div');
projectData.setAttribut = ('class', 'popup-data');
mainProject.appendChild(projectData);

const projectParagraph = document.createElement('p');
projectParagraph.setAttribute = ('class', 'popup-paragraph');
projectData.appendChild(projectParagraph);
projectParagraph.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";

const projectListButton = document.createElement('div');
projectListButton.setAttribute = ('class', 'popup-list-button');
projectData.appendChild(projectListButton);

const projectUl = document.createElement('ul');
projectUl.setAttribute = ('class', 'popup-list');
const languages = ['HTML', 'CSS', 'JavaScript', 'Rugby', 'Bootstrap'];

// Inserting elements in project-data Ul div --> li

for (let i = 0; i < languages.length; i++) {
  const listItem = document.createElement('li');
  listItem.setAttribute = ('class', 'lang-li');
  listItem.textContent = languages[i];
  projectUl.appendChild(listItem);
}
projectListButton.append(projectUl);

// Inserting elements in project data --> button
const lastButton = document.createElement('div');
lastButton.setAttribute = ('class', 'last-button');

projectListButton.append(lastButton);

const projectButton1 = document.createElement('button');
projectButton1.setAttribute = ('type', 'button');
projectButton1.setAttribute = ('class', 'btn btn-1');
projectButton1.innerText = 'See live';
const seeLive = document.createElement('img');
seeLive.setAttribute = ('alt', 'see live');
seeLive.setAttribute = ('class', 'btn-1-img');
seeLive.src = './public/arrow-up.png';
projectButton1.append(seeLive);
lastButton.append(projectButton1);

const projectButton2 = document.createElement('button');
projectButton2.setAttribute = ('type', 'button');
projectButton2.setAttribute = ('class', 'btn btn-2');
projectButton2.innerText = 'See source';
const seeSource = document.createElement('img');
seeSource.setAttribute = ('alt', 'see source');
seeLive.setAttribute = ('class', 'btn-2-img');
seeSource.src = './public/SVG-1.svg';
projectButton2.append(seeSource);
lastButton.append(projectButton2);

function hidePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}
closeButton.addEventListener('click', hidePopup);

// function checkMediaQuery() {
//     if (window.matchMedia("(min-width: 768px)").matches) {
//         console.log("Media query matches (screen width is >= 768px)");
//         projectImg1.style.display = "block";
//         projectImg2.style.display = "none";
//         }
//     else {
//             projectImg1.style.display = "none";
//             projectImg2.style.display = "block";
//     }
// }
// checkMediaQuery();
// popup.addEventListener('resize', checkMediaQuery);
