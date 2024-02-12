const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');

let logAndPas = {
  email: '',
  password: '',
};

form.addEventListener('submit', event => {
  event.preventDefault();                                           // Скасовує дефолтну функцію команди, в даному випадку submit з можливістю її функціональної зміни.

  const contentInputEmail = inputEmail.value.trim();                // Отримує та записує в змінну вміст
  const contentInputPassword = inputPassword.value.trim();          // Отримує та записує в змінну вміст
    
  if (contentInputEmail === '' || contentInputPassword === '') {    // Перевірка на пустоту                                                                    
    alert('All form fields must be filled in');                     // Повідомлення
  } else {
    logAndPas.email = contentInputEmail.trim();                     // Запис значення властивості в об'єкт
    logAndPas.password = contentInputPassword.trim();               // Запис значення властивості в об'єкт
    console.log(logAndPas);                                         // Виведення в консоль
    form.reset();                                                   // Скидання форми за допомогою ресет
  }
});
