import { filterEmployees } from './utils.js';
import { loading, search, cache, config } from './constants.js';
import { getEmployees } from '../data/request.js';
import { showEmployees } from './index.js';

// onSearch function
const onSearch = e => {
 console.log(e.target.value);
 const value = e.target.value.trim();
 cache.searchValue = value || '';
 cache.currentEmployees = filterEmployees(cache.employees).slice(0, config.pagination.perPage);
 loading.classList.add('show');
 showEmployees();
}

const main = () => {
 search.addEventListener("input", onSearch)
 console.log(search);
 getEmployees();
}
window.onload = () => {
 main();
}