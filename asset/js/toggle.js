const wrapper = document.querySelector('.wrapper');
//Grid-List view toggle

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