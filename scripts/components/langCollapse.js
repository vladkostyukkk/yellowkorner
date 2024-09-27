const blockLang = document.querySelector('.footer__lang');
if(blockLang) {
    const button = blockLang.querySelector('.toggle');
    button.addEventListener('click', e => {
        e.preventDefault();
        blockLang.classList.toggle('show');
    }, false);
}
