// *********** switching themes (dark / light) ***********
const switchTheme = () => {
  const rootElement = document.documentElement;
  let dataTheme = rootElement.getAttribute('data-theme');
  let newTheme = dataTheme === 'light' ? 'dark' : 'light';
  rootElement.setAttribute('data-theme', newTheme);
};
document.querySelector('#themeSwitcher').addEventListener('click', switchTheme);

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
