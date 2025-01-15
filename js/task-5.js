function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const textBackgroundColor = document.querySelector('.color');
const bodyTeg = document.querySelector('body');

btnChangeColor.addEventListener('click', () => { 
  const randomColor = getRandomHexColor();
  textBackgroundColor.textContent = randomColor;
  bodyTeg.style = `background-color: ${randomColor}`;
})