// al click dell'hamburger menu chiuso

let button = document.getElementById('open-menu');

button.addEventListener('click',
    function () {
        let closedNav = document.getElementsByClassName('hamburger-menu');
        closedNav.item(0).className = 'hamburger-menu active';
        console.log(closedNav);
    }
);
