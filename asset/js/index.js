import { result, cache } from './constants.js';

//4 Show name and office in DOM
const showEmployees = () => {
  
 result.innerHTML = `
  
   ${cache.currentEmployees.map((employee) => (
    `
     <li>
      <div class="card middle"> 
       <div class="front">
        ${!employee.imagePortraitUrl ? ' <img src="../../asset/img/tretton37-1.png" alt="tretton37">' : `<img src="${employee.imagePortraitUrl}" alt="${employee.name}">`}
       </div>
       
       <div class="back">
        <div class="back-content middle">
          ${!employee.imageWallOfLeetUrl ? '<img src="../../asset/img/tretton37-2.png" alt="tretton37">' : `<img src="${employee.imageWallOfLeetUrl}" alt="${employee.name}">`}
        </div>
       </div>
      </div>

      <div class="social-info"> 
        <span>
         <strong class="name">${employee.name}</strong>
         <strong class="office">Office: ${employee.office}</strong>
        </span>
        <ul class="icon">
         <li>
          <a href="https://www.linkedin.com${employee.linkedIn}" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-linkedin-in"></i>
          </a>
         </li>
         <li>
          <a href="https://github.com/${employee.gitHub}" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-github"></i>
          </a>
         </li>
         <li>
          <a href="https://twitter.com/${employee.twitter}" target="_blank" rel="noopener noreferrer">
           <i class="fab fa-twitter"></i>
          </a>
         </li>
        </ul>
       </div>
     </li>
    `
   )).join('')}
 `;
}

export { showEmployees };



