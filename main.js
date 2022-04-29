// IMPLEMENTAZIONE PURO JS SENZA TOCCARE HTML CON INDEX DELLA LISTA DI getElementsByClassName

// al click dell'hamburger menu chiuso

const openMenu = document.getElementById('open-menu');
// rendi block il tag hamburger menu
openMenu.addEventListener('click',
    function () {
        const closedNav = document.getElementsByClassName('hamburger-menu');
        closedNav.item(0).className = 'hamburger-menu active';
        console.log(closedNav);
    }
);

// al click dell'hamburger menu aperto
const closeMenu = document.getElementById('close-menu');
// rendi hidden il tag hamburger menu
closeMenu.addEventListener('click',
    function () {
        const closedNav = document.getElementsByClassName('hamburger-menu');
        closedNav.item(0).className = 'hamburger-menu';
        console.log(closedNav);
    }
);
