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

for (let i = 0; i < 3; i++) {
  // Цикл для виведення 3 елементів масиву (Якщо нам не відома довжина масива, але відомий його вімст)

  let number = Math.floor(Math.random() * 6);         // Рандомне число від 0 до 5, яке буде посиланням на індекс об'єкта

  const gallery = document.querySelector('.gallery'); // Створення змінної з тегу ul для подальшої роботи з нею та додавання в ul елементів

  // Властивості
  gallery.style.display = 'flex';                     // Горизонтальне відображення зображень через displey: flex
  gallery.style.gap = '46px';                         // Встановлення gap між li
  gallery.style.listStyleType = 'none';               // Пgибираємо geyrn-точку біля li
  gallery.style.justifyContent = 'center';            // Flex вирівнювання по центру

  const newListItem = document.createElement('li');   // Створення посилання на обов'язковий елемент li
  gallery.appendChild(newListItem);                   // Додавання елемента li в ul
  const imageOne = document.createElement('img');     // Створення посилання на img
  imageOne.setAttribute('src', images[number].url);   // Додавання атрибуту src з значенням (Доступ до властивості елементу масиву об"єктів через індекс)
  imageOne.setAttribute('alt', images[number].alt);   // Додавання атрибуту alt з значенням (Доступ до властивості елементу масиву об"єктів через індекс)
  imageOne.classList.add('image');                    // Додавання img класу image

  // Властивості
  imageOne.style.width = '360px';                     // Додавання інлайн властивості width
  imageOne.style.height = '300px';                    // Додавання інлайн властивості height

  newListItem.appendChild(imageOne);                  // Додавання елемента img в li

  console.log(imageOne);                              // Виведення інформації про створені об"єкти в консоль
}
