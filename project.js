// Javascript Object
const projects = [
  {
    projectImg: './public/Snapshoot Portfolio.png',
    heading: 'Tonic',
    projectSubdetails: 'CANOPY',
    projectTitle: 'Back End Dev',
    projectYear: '2015',
    projectParagraph: 'A daily selection of privately personlized reads; no accounts of or sign-ups required.',
    langLi: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    projectImg: './public/Snapshoot Portfolio (1).png',
    heading: 'Multi-Post Stories',
    projectSubdetails: 'FACEBOOK',
    projectTitle: 'Back End Dev',
    projectYear: '2015',
    projectParagraph: 'A daily selection of privately personlized reads; no accounts of or sign-ups required.',
    langLi: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    projectImg: './public/Snapshoot Portfolio (2).png',
    heading: 'Tonic',
    projectSubdetails: 'FACEBOOK',
    projectTitle: 'Back End Dev',
    projectYear: '2015',
    projectParagraph: 'A daily selection of privately personlized reads; no accounts of or sign-ups required.',
    langLi: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    projectImg: './public/Snapshoot Portfolio (3).png',
    heading: 'Multi-Post Stories',
    projectSubdetails: 'UBER',
    projectTitle: 'Back End Dev',
    projectYear: '2015',
    projectParagraph: 'A daily selection of privately personlized reads; no accounts of or sign-ups required.',
    langLi: ['HTML', 'CSS', 'JavaScript'],
  },
];

// project container creation and setting attributes
const projectContainer = document.createElement('div');
projectContainer.setAttribute('id', 'projectContainer');

// Inserting project container in document body
const parent = document.body;
parent.insertBefore(projectContainer, parent.children[2]);

// project cards creation and setting attributes
projects.forEach(project => {
  const mainProject = document.createElement('div');
  mainProject.setAttribute('class', 'project');
  projectContainer.appendChild(mainProject);

  const projectImage = document.createElement('div');
  projectImage.setAttribute('class', 'project-image');
  mainProject.appendChild(projectImage);

  const projectImg = document.createElement('img');
  projectImg.setAttribute('alt', 'Project-1');
  projectImage.appendChild(projectImg);
  projectImg.src = project.projectImg;

  const projectData = document.createElement('div');
  projectData.setAttribute('class', 'project-data');
  mainProject.appendChild(projectData);

  const projectHeading = document.createElement('h1');
  projectHeading.setAttribute('class', 'project-heading');
  projectData.appendChild(projectHeading);
  projectHeading.innerText = project.heading;

  const projectSubDetails = document.createElement('p');
  projectSubDetails.setAttribute('class', 'project-sub-details');
  projectData.appendChild(projectSubDetails);
  projectSubDetails.innerText = project.projectSubdetails;

  const faIcon1 = document.createElement('i');
  faIcon1.setAttribute('class', 'circle fa-solid fa-circle');
  projectSubDetails.appendChild(faIcon1);

  const projectTitle = document.createElement('span');
  projectTitle.setAttribute('class', 'project-title');
  projectSubDetails.appendChild(projectTitle);
  projectTitle.innerText = project.projectTitle;

  const faIcon2 = document.createElement('i');
  faIcon2.setAttribute('class', 'circle fa-solid fa-circle');
  projectSubDetails.appendChild(faIcon2);

  const projectYear = document.createElement('span');
  projectYear.setAttribute('class', 'project-year');
  projectSubDetails.appendChild(projectYear);
  projectYear.innerText = project.projectYear;

  const projectParagraph = document.createElement('p');
  projectParagraph.setAttribute('class', 'project-paragraph');
  projectData.appendChild(projectParagraph);
  projectParagraph.innerText = project.projectParagraph;

  const projectUl = document.createElement('ul');
  projectUl.setAttribute('class', 'lang-list');

  // Inserting elements in project-data Ul div --> li
  project.langLi.forEach(item => {
    const listItem = document.createElement('li');
    listItem.setAttribute('class', 'lang-li');
    listItem.textContent = item;
    projectUl.appendChild(listItem);
  });
  projectData.append(projectUl);

  // Inserting elements in project data --> button
  const projectButton = document.createElement('button');
  projectButton.setAttribute('type', 'button');
  projectButton.innerText = 'See Project';
  projectData.append(projectButton);

  function showPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
  }
  projectButton.addEventListener('click', showPopup);
});
