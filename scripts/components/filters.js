class Filters {
  constructor() {
    this.block = document.querySelector('.block-filters');
  }

  init() {
    if (this.block) {
      this.listLinkToggle = this.block.querySelectorAll(
        '.block-filters__block .toggle'
      );
      this.listLinkToggle.forEach((link) => {
        link.addEventListener(
          'click',
          () => {
            const parentBlock = link.closest('.block-filters__block');
            if (!parentBlock.classList.contains('show')) {
              this.toggleDropdownFilter(parentBlock);
            } else {
              this.closeDropdownFilter(parentBlock);
            }
          },
          false
        );
      });

      this.buttonFilterOpen = document.querySelector('.block-filters__open');
      this.headerElement = document.querySelector('.header__container');
      this.blockFilters = document.querySelector('.block-filters');
      this.buttonFilterOpen.addEventListener(
        'click',
        (e) => {
          e.preventDefault();
          this.block.classList.add('mobile-show');
          const paddingForFilters = this.headerElement.offsetHeight;
          this.blockFilters.style.top = paddingForFilters + 'px';

          document.body.classList.add('no-scroll');
        },
        false
      );

      this.buttonFilterClose = document.querySelector('.block-filters__close');
      this.buttonFilterClose.addEventListener(
        'click',
        (e) => {
          e.preventDefault();
          this.block.classList.remove('mobile-show');
          this.blockFilters.style.removeProperty('top');
          document.body.classList.remove('no-scroll');
        },
        false
      );

      window.addEventListener('resize', () => {
        if (this.block.classList.contains('mobile-show')) {
          this.block.classList.remove('mobile-show');
        }
      });
    }
  }

  toggleDropdownFilter(parentBlock) {
    const listBlock = this.block.querySelectorAll('.block-filters__block');
    listBlock.forEach((block) => {
      if (block.classList.contains('show')) {
        this.closeDropdownFilter(block);
      }
    });
    this.showDropdownFilter(parentBlock);
  }

  showDropdownFilter(block) {
    block.classList.add('show');
  }

  closeDropdownFilter(block) {
    block.classList.remove('show');
  }
}
