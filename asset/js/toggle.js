const wrapper = document.querySelector('.wrapper');
const chk = document.getElementById('chk');

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