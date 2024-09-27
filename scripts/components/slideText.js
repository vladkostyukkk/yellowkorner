const blockSlideText = document.querySelectorAll('.slide-text');

if(blockSlideText) {
    blockSlideText.forEach(block => {
        const button = block.querySelector('.open');
        button.addEventListener('click', e => {
            e.preventDefault();
            block.classList.toggle('show');

            if(block.classList.contains('show')) {
                button.innerHTML = 'Lire moins';
            } else {
                button.innerHTML = 'Lire plus';
            }
        });
    });
}
