//creation of popup container
const popup = document.createElement('div');
popup.setAttribute('id', 'popup');
popup.setAttribute('class', 'popup');

// Inserting popup container in document body
parent.insertBefore(popup, parent.children[1]);
popup.style.display = 'none';


const mainProject = document.createElement('div');
mainProject.setAttribute('class', 'project');
popup.appendChild(mainProject);

const closeButton = document.createElement('div');
closeButton.setAttribute('class', 'closex');
closeButton.innerHTML = '&times;';
mainProject.append(closeButton);

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
closeButton.addEventListener('click', hidePopup);

const projectHeading = document.createElement('h1');
projectHeading.setAttribute('class', 'project-heading');
mainProject.appendChild(projectHeading);
projectHeading.innerText = 'Tonic';

const projectSubDetails = document.createElement('p');
projectSubDetails.setAttribute('class', 'project-sub-details');
mainProject.appendChild(projectSubDetails);
projectSubDetails.innerText = 'CANOPY';

const faIcon1= document.createElement('i');
faIcon1.setAttribute('class', 'circle fa-solid fa-circle');
projectSubDetails.appendChild(faIcon1);

const projectTitle = document.createElement('span');
projectTitle.setAttribute('class', 'project-title');
projectSubDetails.appendChild(projectTitle);
projectTitle.innerText = 'Back End Dev';

const faIcon2= document.createElement('i');
faIcon2.setAttribute('class', 'circle fa-solid fa-circle');
projectSubDetails.appendChild(faIcon2);

const projectYear = document.createElement('span');
projectYear.setAttribute('class', 'project-year');
projectSubDetails.appendChild(projectYear);
projectYear.innerText = '2015';

const projectImage = document.createElement('div');
projectImage.setAttribute('class', 'project-image');
mainProject.appendChild(projectImage);

const projectImg = document.createElement('img');
projectImg.setAttribute('alt', 'Project-1')
projectImg.src = './public/Snapshoot Portfolio.png';
projectImage.appendChild(projectImg);

const projectData = document.createElement('div');
projectData.setAttribute('class', 'project-data');
mainProject.appendChild(projectData);
   
const projectParagraph = document.createElement('p');
projectParagraph.setAttribute('class', 'project-paragraph');
projectData.appendChild(projectParagraph);
projectParagraph.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent";

   
const projectUl = document.createElement('ul');
projectUl.setAttribute('class', 'lang-list');
const languages = ['HTML', 'CSS', 'JavaScript']
    // Inserting elements in project-data Ul div --> li
for (let i=0; i<languages.length; i++) {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'lang-li');
    listItem.textContent = languages[i];
    projectUl.appendChild(listItem);
    };
projectData.append(projectUl);

// Inserting elements in project data --> button
const lastButton = document.createElement('div');
lastButton.setAttribute('class', 'last-button');

projectData.append(lastButton);


const projectButton1 = document.createElement('button');
projectButton1.setAttribute('type', 'button');
projectButton1.setAttribute('class', 'btn btn-1');
projectButton1.innerText = "See live";
const seeLive = document.createElement('img');
seeLive.setAttribute('alt', 'see live');
seeLive.src = './public/arrow-up.png'
projectButton1.append(seeLive);
lastButton.append(projectButton1);

const projectButton2 = document.createElement('button');
projectButton2.setAttribute('type', 'button');
projectButton2.setAttribute('class', 'btn btn-1');
projectButton2.innerText = "See source";
const seeSource = document.createElement('img');
seeSource.setAttribute('alt', 'see source');
seeSource.src = './public/SVG-1.svg'
projectButton2.append(seeSource);
lastButton.append(projectButton2);
