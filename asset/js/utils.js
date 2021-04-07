import { cache } from './constants.js';

const filterEmployees = (employees = []) => {

  return employees.filter( employee => {
    //console.log(employee);
    return (
    (employee.office && employee.office.toLowerCase().indexOf(cache.searchValue.toLowerCase()) === 0) || 
    (employee.email && employee.email.toLowerCase().indexOf(cache.searchValue.toLowerCase()) === 0) ||
    (employee.name && employee.name.toLowerCase().indexOf(cache.searchValue.toLowerCase()) === 0)
  )
 })
}

export { filterEmployees };