class SearchBox {
  constructor() {
    this.active = 'show';
    this.block = document.querySelector('.block-search');
    this.resultBlock = document.querySelector('.search-layer-container');
    this.searchWordValue = document.querySelector('.search-word__value');
  }

  init() {
    if (this.block) {
      this.buttonCloseMobileSearch = this.block.querySelector('.close');
      this.input = this.block.querySelector('input[type="text"]');
      this.results = this.block.querySelector('.dropdown');
      this.listTabs = this.block.querySelectorAll('.nav-tabs a');

      this.input.addEventListener('focus', () => {
        this.toggleBlockResults();
        this.clickOutside();
      });

      this.input.addEventListener('input', (e) => {
        this.toggleBlockResults();
      });

      this.buttonCloseMobileSearch.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeSearchBox();
      });

      if (this.listTabs.length) {
        this.listTabs.forEach((link) => {
          if (link.classList.contains('active')) {
            this.showTab(link);
          }

          link.addEventListener('click', () => {
            if (!link.classList.contains('active')) {
              this.toggleTab(link);
            }
          });
        });
      }
    }
  }

  async toggleBlockResults() {
    const inputValue = this.input.value;
    const url = `http://localhost:3000?q=${inputValue}`;
    if (inputValue.length > 2) {
      this.openSearchBox();
      this.searchWordValue.innerHTML = inputValue;

      const resp = await fetch(url);
      const text = await resp.text();
      this.resultBlock.innerHTML = text;
    } else {
      if (this.block.classList.contains(this.active)) {
        this.closeSearchBox();
      }
    }
  }

  clickOutside() {
    document.addEventListener('click', (e) => {
      const isElementInside = this.block.contains(e.target);
      const isActive = this.block.classList.contains(this.active);
      if (!isElementInside && isActive) {
        this.closeSearchBox();
      }
    });
  }

  openSearchBox() {
    this.block.classList.add(this.active);
    showOverlayBody();
  }

  closeSearchBox() {
    this.block.classList.remove(this.active);
    hideOverlayBody();
  }

  showTab(link) {
    const tabId = link.getAttribute('data-tab');
    const tab = document.getElementById(tabId);
    tab && tab.classList.add('active');
  }

  closeTab(link) {
    const tabId = link.getAttribute('data-tab');
    const tab = document.getElementById(tabId);
    tab.classList.remove('active');
    link.classList.remove('active');
  }

  toggleTab(link) {
    const tabSet = link.closest('.nav-tabs');
    const listLink = tabSet.querySelectorAll('.nav-tabs a');
    listLink.forEach((e) => {
      if (e.classList.contains('active')) {
        this.closeTab(e);
      }
    });
    this.showTab(link);
    link.classList.add('active');
  }
}
