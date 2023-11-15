import { getAllCategory } from './book-api';

document.addEventListener('DOMContentLoaded', async function () {
  const getData = await getAllCategory();
  const { data } = getData;
  addList(data);
});

function addList(categories) {
  const categoriesList = document.querySelector('.categories');
  const markup = categories
    .map(category => {
      const { list_name } = category;
      return `
        <li><a class='categories_item' href='#' id='_${list_name}'>${list_name}</a></li>
        `;
    })
    .join('');
  categoriesList.insertAdjacentHTML('beforeend', markup);
  let categoriesArray = [...document.getElementsByClassName('categories_item')];
  categoriesArray.forEach(e =>
    e.addEventListener('click', () => {
      document
        .querySelector('.active_category')
        .classList.remove('active_category');
      e.classList.add('active_category');
    })
  );
}
