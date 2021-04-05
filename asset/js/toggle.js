const wrapper = document.querySelector('.wrapper');
const chk = document.getElementById('chk');
const target = document.querySelector('footer');
const scrollToTopBtn = document.querySelector(".scrollToTopBtn")
const rootElement = document.documentElement

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