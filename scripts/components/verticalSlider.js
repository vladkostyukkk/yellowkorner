const verticalSliderList = document.querySelectorAll('.vertical-slider');
if(verticalSliderList) {
    verticalSliderList.forEach(slider => {
        const slideList = slider.querySelectorAll('.slide');
        let slide;
        let index = 1;
        if (slideList.length > 1) {
            setInterval(function () {
                slideList.forEach(item => {
                    if(item.classList.contains('active')) {
                        slide = item;
                    }
                });
                slide.classList.add('slide-up');
                setTimeout(function () {
                    slide.classList.remove('slide-up');
                }, 500);
                slide.classList.remove('active');
                slideList[index].classList.add('active');
                index = ++index % slideList.length;
            }, 5e3);
        }
    });
}
