const blockInformation = document.querySelector('.block-photography-information');
if(blockInformation) {
    const button = blockInformation.querySelector('.toggle');
    button.addEventListener('click', e => {
        e.preventDefault();
        blockInformation.classList.toggle('show');
    }, false);
}
