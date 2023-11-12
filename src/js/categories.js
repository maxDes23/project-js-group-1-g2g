import { serviceAllCategory } from "./book-api";

document.addEventListener('DOMContentLoaded', async function () {
    const getData = await serviceAllCategory();
    console.log(getData);
    const { data } = getData;
    addList(data);
  });
  
function addList(categories) {
    const categoriesList = document.querySelector('.categories');
    const markup = categories.map(category => {
        const { list_name } = category;
        return `
        <li><a class='categories_item' href='#'>${list_name}</a></li>
        `;
      }).join('');
    categoriesList.insertAdjacentHTML('beforeend', markup);
}