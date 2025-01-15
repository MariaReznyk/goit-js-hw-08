function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputField = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');

function createBoxes(number) { 
  number = inputField.value;

  divBoxes.innerHTML = '';

  let boxCollection = [];

  if (Number(number) >= Number(inputField.min) && Number(number) <= Number(inputField.max) && Number(number) % 1 === 0) {
    for (let i = 1; i <= Number(number); i++) {
      const newBox = document.createElement('div');
      newBox.style = `background-color: ${getRandomHexColor()}; width: ${20+i*10}px; height: ${20+i*10}px;`;
      boxCollection.push(newBox);
    }
  }

  divBoxes.append(...boxCollection);

  inputField.value = '';
}

function destroyBoxes() { 
  inputField.value = '';
  divBoxes.innerHTML = '';
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
