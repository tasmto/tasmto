var navMenuState = false;
// ON LOAD IFFE
(function () {

    // NAV FUNCTIONALITY
    const docHeader =document.querySelector('header');
    const navController = docHeader.querySelector('.hamburger-menu');
    navController.addEventListener('click', () => {
        navMenuState = !navMenuState;
        const nav = docHeader.querySelector('nav');
        nav.setAttribute('aria-expanded', `${navMenuState}`);
    });






} ());