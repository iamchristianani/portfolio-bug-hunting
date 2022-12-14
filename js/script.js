const btnBox = document.querySelector('#menu-display');
const modalContainer = document.querySelector('#modal-container');
const workCard = document.getElementById('work-card-cont');
const menuOverlay = document.querySelector('#menu-overlay');
const menuButton = document.querySelector('#menu-btn-2');
const hamburgerButton = document.querySelector('#hamburger-button');
const workButton = document.querySelector('#work-btn');
const aboutButton = document.querySelector('#about-btn');
const contactButton = document.querySelector('#contact-btn');
const form = document.querySelector('#contact-me');
const inputField = document.querySelectorAll('.input-field');
const errorMessage = document.querySelector('#error-message');
const { email } = form.elements;

function showMenu() {
  btnBox.classList.toggle('menu-display');
  menuOverlay.classList.toggle('menu-display');
}

menuButton.addEventListener('click', () => {
  showMenu();
});

hamburgerButton.addEventListener('click', () => {
  showMenu();
});

workButton.addEventListener('click', () => {
  showMenu();
});

aboutButton.addEventListener('click', () => {
  showMenu();
});

contactButton.addEventListener('click', () => {
  showMenu();
});

const projects = [
  {
    id: 1,
    name: 'National Institute of Standards',
    description: 'Wearing face masks that adequately cover the mouth and nose causes the error rate of some of the most widely used facial recognition algorithms to spike to between 5 percent and 50 percent, a study by the US National Institute of Standards and Technology (NIST) has found.',
    cardImage: 'img/modal-image-mobile.png',
    modalImage: 'img/modal-image-mobile.png',
    imageAlt: 'National Institute of Standards',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://iamchristianani.github.io/portfolio/',
    sourceLink: 'https://github.com/iamchristianani/portfolio',
  },
  {
    id: 2,
    name: 'Free-phone Program',
    description: 'Chhattisgarhs $71 million free-phone program - known by the acronym SKY after its name in Hindi - is supposed to bridge the digital divide in this state of 26 million people, which is covered by large patches of forest and counts 7,000 villages that do not even have a wireless data signal.',
    cardImage: 'img/modal-image-mobile-2.png',
    modalImage: 'img/modal-image-mobile-2.png',
    imageAlt: 'Free-phone Program',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Python'],
    liveLink: 'https://iamchristianani.github.io/portfolio/',
    sourceLink: 'https://github.com/iamchristianani/portfolio',
  },
  {
    id: 3,
    name: 'National Institute of Standards',
    description: 'Wearing face masks that adequately cover the mouth and nose causes the error rate of some of the most widely used facial recognition algorithms to spike to between 5 percent and 50 percent, a study by the US National Institute of Standards and Technology (NIST) has found.',
    cardImage: 'img/modal-image-mobile.png',
    modalImage: 'img/modal-image-mobile.png',
    imageAlt: 'National Institute of Standards',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://iamchristianani.github.io/portfolio/',
    sourceLink: 'https://github.com/iamchristianani/portfolio',
  },
  {
    id: 4,
    name: 'Free-phone Program',
    description: 'Chhattisgarhs $71 million free-phone program - known by the acronym SKY after its name in Hindi - is supposed to bridge the digital divide in this state of 26 million people, which is covered by large patches of forest and counts 7,000 villages that do not even have a wireless data signal.',
    cardImage: 'img/modal-image-mobile-2.png',
    modalImage: 'img/modal-image-mobile-2.png',
    imageAlt: 'Free-phone Program',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Python'],
    liveLink: 'https://iamchristianani.github.io/portfolio/',
    sourceLink: 'https://github.com/iamchristianani/portfolio',
  },
  {
    id: 5,
    name: 'National Institute of Standards',
    description: 'Wearing face masks that adequately cover the mouth and nose causes the error rate of some of the most widely used facial recognition algorithms to spike to between 5 percent and 50 percent, a study by the US National Institute of Standards and Technology (NIST) has found.',
    cardImage: 'img/modal-image-mobile.png',
    modalImage: 'img/modal-image-mobile.png',
    imageAlt: 'National Institute of Standards',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveLink: 'https://iamchristianani.github.io/portfolio/',
    sourceLink: 'https://github.com/iamchristianani/portfolio',
  },
  {
    id: 6,
    name: 'Free-phone Program',
    description: 'Chhattisgarhs $71 million free-phone program - known by the acronym SKY after its name in Hindi - is supposed to bridge the digital divide in this state of 26 million people, which is covered by large patches of forest and counts 7,000 villages that do not even have a wireless data signal.',
    cardImage: 'img/modal-image-mobile-2.png',
    modalImage: 'img/modal-image-mobile-2.png',
    imageAlt: 'Free-phone Program',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'Python'],
    liveLink: 'https://iamchristianani.github.io/portfolio/',
    sourceLink: 'https://github.com/iamchristianani/portfolio',
  },
];

function showModal() {
  modalContainer.classList.toggle('modal-display');
}

function openModal(projectIndex) {
  const oneProject = projects[projectIndex];
  let list = '';
  oneProject.technologies.forEach((item1) => {
    list += `<li>${item1}</li>`;
  });

  const modalContent = `<div class="modal">
  <div class="modal-image-box">
      <div class="modal-close-btn" id="modal-close-btn">
          <i onclick="showModal()" class="fa-solid fa-xmark"></i>
      </div>
      <img src="${oneProject.modalImage}" alt="${oneProject.imageAlt}" class="modal-image-mobile">
  </div>
  <div class="modal-text-box">
      <h3>${oneProject.name}</h3>
      <ul class="modal-pr-lang">
        ${list}
      </ul>
      <p>${oneProject.description}</p>
      <div class="modal-btns">
          <button><a href="${oneProject.liveLink}">See Live <i class="fa-solid fa-arrow-up-right-from-square modal-btn-icon"></i></a></button>
          <button><a href="${oneProject.sourceLink}">See Source <i class="fa-brands fa-github modal-btn-icon"></i></a></button>
      </div>
  </div>
  </div>`;
  modalContainer.innerHTML = modalContent;
  showModal();
}

projects.forEach((items) => {
  let list = '';
  item.technologies.forEach((item1) => {
    list += `<li>${item1}</li>`;
  });
  const workCardContent = `<li class="work-card">
  <div class="word-card-img">
    <img src="${items.cardImage}" alt="${items.imageAlt}" class="modal-image-mobile">
  </div>
  <div class="work-card-info">
      <h2>${items.name}</h2>
      <ul class="work-card-pr-lang" id="work-card-pr-lang-1">
          ${list}
      </ul>
      <button data-id="${items.id}" id="project-buttons">See Project</button>
  </div>
  </li>`;
  workCard.innerHTML += workCardContent;
});

const projectButtonList = document.querySlectorAll('#project-buttons');

projectButtonList.forEach((button) => {
  button.addEventListener('click', () => {
    const projectId = parseInt(button.dataset.id, 10) - 1;
    openModal(projectId);
  });
});

/** FORM VALIDATION */

form.addEventListener('submit', (event) => {
  if (email.value.toLowerCase() !== email.value) {
    errorMessage.classList.remove('modal-display');
    event.preventDefault();
  }
});

/** STORE VALUES LOCALLY */

const storedData = {
  name: '',
  email: '',
  message: '',
};

inputField.forEach((input) => {
  input.addEventListener('input',  => {
    storedData[input.name] = input.value;
    localStorage.setItem('allData', JSON.stringify(storedData));
  });
});

const storedForm = JSON.parse(localStorage.getItem('allData'));
if (storedForm) {
  inputField.forEach((keyItem) => {
    keyItem.value = storedForm[keyItem.name];
  });
}
