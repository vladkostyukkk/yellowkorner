const sortList = document.querySelectorAll('.sort');

if(sortList) {
    sortList.forEach(sort => {
        const button = sort.querySelector('.toggle');

        button.addEventListener('click', e => {
            e.preventDefault();
            button.closest('.sort').classList.toggle('show');
        });
    });
}
