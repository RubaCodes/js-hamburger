// IMPLEMENTAZIONE PURO JS SENZA TOCCARE HTML CON INDEX DELLA LISTA DI getElementsByClassName



//hook ai buttons di apertura e chiusura
const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');

// al click dell'hamburger menu chiuso
const hamburgerMenu = document.getElementsByClassName('hamburger-menu');

openMenu.addEventListener('click',
    function () {
        // rendi block il tag hamburger menu
        hamburgerMenu.item(0).className = 'hamburger-menu active';
        console.log(' Hamburger Menu aperto');
    }
);


// al click dell'hamburger menu aperto
closeMenu.addEventListener('click',
    function () {
        // rendi hidden il tag hamburger menu
        hamburgerMenu.item(0).className = 'hamburger-menu';
        console.log(' Hamburger Menu chiuso');
    }
);
