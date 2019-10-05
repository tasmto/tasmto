//THE ONLOAD FUNCTION
(function(){

//THE NAV HAMBURGER MENU
const hamburger_menu = document.querySelector('.hamburger_menu__container');
hamburger_menu.setAttribute('onclick', 'openCloseNav(this)')


}());


function openCloseNav(hamburger_menu){
    hamburger_menu.classList.toggle('nav_open');

    hamburger_menu.nextElementSibling.classList.toggle('nav_open');
    delayNavItemsTransition( hamburger_menu.nextElementSibling);
}

function delayNavItemsTransition (nav) {
    const menu_items = nav.querySelectorAll('ul > li');
    
    if(!(menu_items[1].style.transitionDelay === ''))return;

    let n = 100;

    menu_items.forEach(item => {
        item.style.transitionDelay = `${n}ms`;
        n += 100;
    });
}
