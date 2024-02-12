const categoryElements = document.querySelectorAll('#categories .item');

console.log('Number of categories: ' + categoryElements.length);

categoryElements.forEach(category => {
  const categoryName = 'Category: ' + category.querySelector('h2').textContent;

  const listItemElements =
    'Elements: ' + category.querySelectorAll('ul li').length;

  console.log(categoryName);
  console.log(listItemElements);
});
