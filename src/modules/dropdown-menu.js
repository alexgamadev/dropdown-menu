export default function initDropdownMenus() {
  document.querySelectorAll('.dropdown-menu').forEach((element) => {
    element.addEventListener('click', ({ target }) => {
      target.classList.toggle('selected');
      const dropdownMenu = element.querySelector('.menu-container');
      dropdownMenu.classList.toggle('hidden');
      dropdownMenu.classList.toggle('expanded');
    });
  });
}
