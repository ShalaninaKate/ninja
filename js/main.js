/******/ (() => { // webpackBootstrap
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
const forms = document.querySelectorAll('.form');
if (forms) {
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
    });
  });
}
const switchBtns = document.querySelectorAll('.switch-btn');
if (switchBtns) {
  switchBtns.forEach(switchBtn => {
    switchBtn.addEventListener('click', function () {
      this.classList.toggle('switch-on');
    });
  });
}
function initDropdowns() {
  const dropdowns = document.querySelectorAll(".input-select");
  dropdowns.forEach(dropdown => {
    const dropdownInput = dropdown.querySelector(".dropdown-input");
    const dropdownButton = dropdown.querySelector(".dropdown-button");
    const dropdownItems = dropdown.querySelectorAll(".dropdown__item");
    function toggleDropdown() {
      dropdown.classList.toggle("show");
    }
    function selectItem(event) {
      dropdownInput.value = event.target.textContent;
      dropdown.classList.remove("show");
    }
    function closeDropdown(event) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("show");
      }
    }
    dropdownInput.addEventListener("click", toggleDropdown);
    dropdownButton.addEventListener("click", toggleDropdown);
    dropdownItems.forEach(item => item.addEventListener("click", selectItem));
    document.addEventListener("click", closeDropdown);
  });
}
initDropdowns();
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");
    });
  });
});
function fitTextToContainers() {
  const containers = document.querySelectorAll('.container-text');
  containers.forEach(container => {
    const text = container.querySelector('.text');
    if (!text) return;
    let fontSize = 36; // Начальный размер шрифта
    text.style.fontSize = `${fontSize}px`;

    // Уменьшаем шрифт, пока текст не впишется в контейнер
    while (text.scrollWidth > container.clientWidth && fontSize > 8) {
      fontSize -= 1;
      text.style.fontSize = `${fontSize}px`;
    }
  });
}

// Запускаем функцию при загрузке и изменении размера окна
window.addEventListener('resize', fitTextToContainers);
fitTextToContainers();
/******/ })()
;