const footerNav = document.querySelector('.footer__navigation');

if(footerNav) {
    const listLinksToggle = footerNav.querySelectorAll('.submenu h4 a');
    listLinksToggle.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            link.closest('.submenu').classList.toggle('show');
        });
    });
}
