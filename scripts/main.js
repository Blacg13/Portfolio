//=========================================
// **** switching themes (dark / light) ***
//=========================================
const switchTheme = () => {
  const rootElement = document.documentElement;
  let dataTheme = rootElement.getAttribute('data-theme');
  let newTheme = dataTheme === 'light' ? 'dark' : 'light';
  rootElement.setAttribute('data-theme', newTheme);
};
document
  .querySelector('#theme-switcher')
  .addEventListener('click', switchTheme);

//==============================================
// **** flipping cards (checked / unchecked) ***
//==============================================
const UL = document.querySelector('main > ul');
const CHECKBOXES = document.querySelectorAll('.flip-card-checkbox');
CHECKBOXES.forEach((checkbox) => {
  let flipCardContainer = document.querySelector(`li#${checkbox.name}`);
  let flipCard = flipCardContainer.querySelector('.flip-card');
  let recto = flipCard.querySelector('.card-recto');
  let verso = flipCard.querySelector('.card-verso');
  let panel = flipCardContainer.querySelector('.panel');

  checkbox.checked = false;
  verso.style.display = 'none';
  panel.style.display = 'none';

  checkbox.addEventListener('change', () => {
    console.log(checkbox.checked);
    checkbox.checked
      ? ((flipCardContainer.style.transform = 'rotateY(180deg)'),
        UL.style.setProperty('justify-content', 'flex-start'),
        // flipCardContainer.classList.add(
        //   'animate__animated',
        //   'animate__fadeOut'
        // ),
        // (flipCardContainer.style.animation = 'flip-animation 0.8s ease-in-out'),
        (recto.style.display = 'none'),
        // (flipCardContainer.style.transform = 'rotateY(90deg)'),
        (verso.style.display = 'block'),
        // panel.classList.add('animate__fadeIn'),
        (panel.style.display = 'block'))
      : ((flipCardContainer.style.transform = 'rotateY(0deg)'),
        (verso.style.display = 'none'),
        (recto.style.display = 'block'),
        panel.classList.add('animate__fadeOut'),
        (panel.style.display = 'none'));
  });
});

// *********** pouet ***********
const ACCORDION_TOGGLE_H2 = document.querySelectorAll('section > h2');
const ACCORDION_CONTENT = document.querySelectorAll('section > div');
ACCORDION_CONTENT.hidden = true;

const HTML = document.querySelector('html');
function switchDark() {
  HTML.style.setProperty('color-scheme', 'dark');
}

function switchLight() {
  HTML.style.setProperty('color-scheme', 'light');
}

function switchAuto() {
  HTML.style.setProperty('color-scheme', 'light dark');
}
switchDark();

ACCORDION_TOGGLE_H2.forEach((h2) => {
  h2.addEventListener('click', () => {
    console.log('clicked');
    // ACCORDION_CONTENT.style.display = "block";
  });
});
for (let i = 0; i < ACCORDION_TOGGLE_H2.length; i++) {
  ACCORDION_TOGGLE_H2[i].addEventListener('click', () => {
    this.classList.toggle('active');
  });
}
