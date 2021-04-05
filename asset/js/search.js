const search = document.getElementById("search");

// onSearch function
const onSearch = e => {
 console.log(e.target.value);
 const value = e.target.value.trim();
 cache.currentEmployees = cache.employees.filter( employee => {
  console.log(employee);
  return (
   (employee.office && employee.office.toLowerCase().indexOf(value.toLowerCase()) === 0) || 
   (employee.email && employee.email.toLowerCase().indexOf(value.toLowerCase()) === 0) ||
   (employee.name && employee.name.toLowerCase().indexOf(value.toLowerCase()) === 0)
 )
 })
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