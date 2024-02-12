function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputArea = document.querySelector('.inputArea');
const createButton = document.querySelector('.create');
const destroyButton = document.querySelector('.destroy');
const areaForColection = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  let numFromInputArea = inputArea.value;
  inputArea.value = '';

  if (numFromInputArea >= 1 && numFromInputArea <= 100) {
    areaForColection.innerHTML = '';
    let width = 30;
    let height = 30;
    for (let i = 0; i < numFromInputArea; i++) {
      const newListItem = document.createElement('div');
      areaForColection.appendChild(newListItem);
      let color = getRandomHexColor();
      newListItem.style.width = width + 'px';
      newListItem.style.height = height + 'px';
      newListItem.style.background = color;
      width += 10;
      height += 10;
    }
  }
});

destroyButton.addEventListener('click', () => {
  areaForColection.innerHTML = '';
});
