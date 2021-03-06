import { filterEmployees } from './utils.js';
import { wrapper, chk, target, scrollToTopBtn, rootElement, loading, cache, config } from './constants.js';
import { showEmployees } from './index.js';



// Grid-List view toggle

document.addEventListener("click", e => {
  if (!e.target.matches(".view-toggle_list")) return;

  // List view
  e.preventDefault();
  wrapper.classList.add("list");
});

document.addEventListener("click", e => {
  if (!e.target.matches(".view-toggle_grid")) return;

  // List view
  e.preventDefault();
  wrapper.classList.remove("list");
});

// Theme Toggler

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
  window.scrollTo(0,0);
});

// Scroll to top

const callback = (entries, observer) => {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.map(entry => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showBtn")
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn")
    }
  });
}

const scrollToTop = () => {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
    
// Next I instantiate the observer with the function I created above. This takes an optional configuration
// object that I will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);

// Infinite Scrolling

window.addEventListener('scroll', () => {
  //console.log(123);

  const currentBottomScrollPosition = window.pageYOffset + window.innerHeight;
  const loadingTopPosition = loading.getBoundingClientRect().top;

  if( loadingTopPosition - currentBottomScrollPosition <= 150 ) {
  
    // show the loading animation
    showLoading();
  }
});

const showLoading = () => {
  loading.classList.add('show');
  
  // load more data
  const employyes = filterEmployees(cache.employees);
  cache.currentEmployees = employyes.slice(0, cache.currentEmployees.length + config.pagination.perPage);
  showEmployees();
  setTimeout(() => {
    if(cache.currentEmployees.length >= employyes.length){
      loading.classList.remove('show');
    }  
  }, 500);
  
}