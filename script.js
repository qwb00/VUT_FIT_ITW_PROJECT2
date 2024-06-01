window.addEventListener('scroll', function() {
    var headerHeight = document.querySelector('header').offsetHeight;
    var fixedMenu = document.getElementById('fixed-menu');

    if (window.pageYOffset > headerHeight) {
        fixedMenu.classList.add('visible');
    } else {
        fixedMenu.classList.remove('visible');
    }
});