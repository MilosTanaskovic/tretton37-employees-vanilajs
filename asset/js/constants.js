const apiURL = 'https://api.1337co.de';
const endpoint = 'v3/employees';

const wrapper = document.querySelector('.wrapper');
const chk = document.getElementById('chk');
const target = document.querySelector('footer');
const scrollToTopBtn = document.querySelector(".scrollToTopBtn");
const rootElement = document.documentElement;
const loading = document.querySelector('.loading');
const result = document.getElementById('result');
const search = document.getElementById("search");

const cache = {
  employees: [],
  currentEmployees: [],
  searchValue: '',
}
const config = {
  pagination: {
    perPage: 50,
  }
}

export { 
 apiURL,
 endpoint,
 wrapper, 
 chk, 
 target, 
 scrollToTopBtn, 
 rootElement, 
 loading, 
 result, 
 search, 
 cache, 
 config 
};