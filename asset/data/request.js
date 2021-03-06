import { apiURL, endpoint, cache, config } from '../js/constants.js';
import { showEmployees } from '../js/index.js';

// Fetch employees from API
const getEmployees = async () => {
 const res = await fetch(`${apiURL}/${endpoint}`, {
  method: 'get',
  headers: {
   'Authorization': 'api-key 14:2021-04-01:anders.iggsten@tretton37.com 953c1a5348892f2b126f6d700b486e19cb90b161f7ffa7032c30aed985530fe9',
   'Content-Type': 'application/json; charset=utf-8',
  },
  mode: 'cors',
  cache: 'default',
 });
 const data = await res.json();
 
 console.log(data);

 cache.employees = data;
 cache.currentEmployees = data.slice(0, config.pagination.perPage);

 showEmployees();
}

export { getEmployees };