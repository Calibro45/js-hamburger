
// indivuadere elemento html hamburger e salvarlo

const hamburgerMenuIcon = document.querySelector(".header-right > a");
console.log(hamburgerMenuIcon);

// rilevare il click per far apparire il menu

hamburgerMenuIcon.addEventListener('click', function() {

    const HAMBURGER_MENU = document.querySelector(".hamburger-menu");

    HAMBURGER_MENU.classList.add("active");
    
    console.log('ora mi vedi', HAMBURGER_MENU);
    
    // individuo elemento che chiude menu in html e lo salvo
    
    const closeMenuIcon = document.querySelector(".close");
    //console.log(closeMenuIcon);
    
    // rilevo il click per chiudere menu
    
    closeMenuIcon.addEventListener('click', function() {
        
        HAMBURGER_MENU.classList.remove("active");

        console.log('ora non mi vedi')
        
    }) 
})
