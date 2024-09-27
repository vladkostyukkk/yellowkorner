const PAGE = document.querySelector('.page');

let heightOffset = 0;
const headerTopPanel = document.querySelector('.header__top-panel');
const filtersContainer = document.querySelector('.block-filters__mob-wrap');
if (headerTopPanel) {
  heightOffset = headerTopPanel.clientHeight;
}

const headerContainer = document.querySelector('.header__container');
if (headerContainer) {
  toggleSticky(window.pageYOffset);

  window.addEventListener('scroll', (e) => {
    toggleSticky(window.pageYOffset);
  });
}

function toggleSticky(offset) {
  if (offset > heightOffset) {
    if (!headerContainer.classList.contains('sticky')) {
      headerContainer.classList.add('sticky');
      filtersContainer.classList.add('sticky');
      filtersContainer.style.top = headerTopPanel.offsetHeight + 15 + 'px';
      PAGE.style.paddingTop = headerContainer.clientHeight + 'px';
    }
  } else {
    if (headerContainer.classList.contains('sticky')) {
      headerContainer.classList.remove('sticky');
      filtersContainer.classList.remove('sticky');
      filtersContainer.style.removeProperty('top');
      PAGE.style.paddingTop = '0px';
    }
  }
}
