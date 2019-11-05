

(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 800){
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}());