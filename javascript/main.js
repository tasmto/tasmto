
//OPEN CLOSE THE NAV MENU

function navMenu () {
    var menu = document.querySelector('#main_menu__container');
     menu.classList.toggle('show_menu');
     document.body.classList.toggle('no-overflow');
    };
    
    
    //ONLOAD FUNCTIONS
    (function () {
    
     var hamburgermenu = document.querySelector('.hamburger_menu__container');
     var menu = document.querySelector('#main_menu__container');
     var closeIcon = menu.querySelector('.close-menu');
    
     closeIcon.setAttribute('onclick', 'navMenu()');
     hamburgermenu.setAttribute('onclick', 'navMenu()');
    
    }());