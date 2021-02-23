
//OPEN CLOSE THE NAV MENU

navMenu = () => {
    const menu = document.querySelector('#main_menu__container');
     menu.classList.toggle('show_menu');
    };
    
    
    //ONLOAD FUNCTIONS
    (function () {
    
     const hamburgermenu = document.querySelector('.hamburger_menu__container');
     const menu = document.querySelector('#main_menu__container');
    
     menu.setAttribute('onclick', 'navMenu()');
     hamburgermenu.setAttribute('onclick', 'navMenu()');
    
    }());