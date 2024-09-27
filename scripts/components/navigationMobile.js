class Navigation {
    constructor() {
        this.nav = document.querySelector('.navigation');
        this.active = 'show';
    }

    init() {
        if(this.nav) {
            this.buttonMobile = this.nav.querySelector('.navigation__toggle-mobile');
            this.buttonMobile.addEventListener('click', e => {
                e.preventDefault();
                this.nav.classList.toggle(this.active);
                BODY.classList.toggle('background-overlay-nav');
            });

            const listMenuTitle = this.nav.querySelectorAll('.menu-title');
            listMenuTitle.forEach(title => {
                title.addEventListener('click', e => {
                    e.preventDefault();
                    title.closest('.menu').classList.toggle('show');
                }, false);
            });

            window.addEventListener('resize', () => {
                if(this.nav.classList.contains(this.active)) {
                    this.nav.classList.remove(this.active);
                    BODY.classList.remove('background-overlay-nav');
                }

                if(!this.nav.classList.contains(this.active)) {
                    const listMenu = this.nav.querySelectorAll('.menu');
                    listMenu.forEach(menu => {
                        if(menu.classList.contains('show')) {
                            menu.classList.remove('show');
                        }
                    });
                }
            });
        }
    }
}
