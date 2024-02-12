function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonThatChangeColor = document.querySelector('.change-color');
const bodyArea = document.querySelector('.body-area');
const spanTextArea = document.querySelector('.color');

buttonThatChangeColor.addEventListener('click', () => {
  let color = getRandomHexColor();
  bodyArea.style.background = color;
  spanTextArea.textContent = color;
});
