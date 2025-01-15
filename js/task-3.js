const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const nameInputEdited = nameInput.value.trim();
    nameOutput.textContent = nameInputEdited;

    if (nameInputEdited === '') {nameOutput.textContent = 'Anonymous'}
})