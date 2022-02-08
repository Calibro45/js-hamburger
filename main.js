// indivuadere elemento html hamburger e salvarlo

const hamburgerMenuIcon = document.querySelector(".header-right > a");
console.log(hamburgerMenuIcon);

// rilevare il click per far apparire il menu

hamburgerMenuIcon.addEventListener('click', function() {

    const HAMBURGER_MENU = document.querySelector(".hamburger-menu");

    HAMBURGER_MENU.classList.add("active");
    
    console.log('mi hai clickato', HAMBURGER_MENU);



})