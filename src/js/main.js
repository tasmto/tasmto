var navMenuState = false;
// ON LOAD IFFE
(function () {

    // NAV FUNCTIONALITY
    const docHeader = document.querySelector('header');
    const navController = docHeader.querySelector('.hamburger-menu');
    navController.addEventListener('click', () => {
        navMenuState = !navMenuState;
        const nav = docHeader.querySelector('nav');
        nav.setAttribute('aria-expanded', `${navMenuState}`);
        if (navMenuState) {
            document.querySelector('main').classList.add('blurOverlay');
            setTimeout(function () { document.querySelector('main').classList.remove('blurOverlay'); }, 1500);
            navController.querySelector('img').src = navController.querySelector('img').getAttribute('data-close');
        } else {
            navController.querySelector('img').src = navController.querySelector('img').getAttribute('data-open');
        }
    });

    const navItems = docHeader.querySelectorAll('nav ul li');
    let a;
    for (a = 0; navItems.length > a; a++) {
        navItems[a].style.transitionDelay = `${100 * a + 450}ms`;
        if (a % 2 == 0) {
            navItems[a].classList.add('flipped-animation');
        }
    };







}());