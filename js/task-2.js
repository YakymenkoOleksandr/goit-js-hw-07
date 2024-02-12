const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  {
    url: 'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Elephant Beside on Baby Elephant',
  },
  {
    url: 'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Blue Geeen and Orange Parrot',
  },
  {
    url: 'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Zebras on Zebra',
  },
];

let numArr = [];                                        // Масив в який записуються 3 випадкові числа для використання всіх 6 фотографій
function threeDifferentNum() {                          // Функція, що генерує 3 рандомні числа і записує їх в масив
  while (numArr.length < 3) {
    let number = Math.floor(Math.random() * 6);
    if (!numArr.includes(number)) {
      numArr.push(number);
    }
  }
}

threeDifferentNum();                                    // Виклик функції генерування чисел

const gallery = document.querySelector('.gallery');     // Встановлення зв"язку через змінну з ul class="gallery
const fragment = document.createDocumentFragment();     // Створення вмістилища для елементів

numArr.forEach(i => {                                   // Функція створення фотокарток, яка базується на рандомних числах з масиву 
  const newListItem = document.createElement('li');     // Прив"язка створення li через змінну
  const imageOne = document.createElement('img');       // Прив"язка створення img через змінну

  imageOne.setAttribute('src', images[i].url);          //  Додавання атрибуту тега, що відповідає властивості об"єкта 
  imageOne.setAttribute('alt', images[i].alt);          //  Додавання атрибуту тега, що відповідає властивості об"єкта 
  imageOne.classList.add('image');                      //  Додавання класу 

  newListItem.appendChild(imageOne);                    // Додаємо в li img
  fragment.appendChild(newListItem);                    // Додаємо в вмістилище li з img з атрибутами
});

gallery.appendChild(fragment);                          // Додаємо вмістилище з 3 li що містять img з атрибутами (Одним кроком)
