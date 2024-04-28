import React from 'react';

//Pas encore implémenté

const Features = () => {

    // Credit : voir cette page pour le code inspirant  https://freefrontend.com/css-carousels/
    // common idea: https://dribbble.com/shots/20364660-Nibble-Health-Identity-Social-Posting
// carousel animation: https://codepen.io/aija/details/xvXWoK

    let CHECKED = false;
    document.addEventListener("pointerdown", (e) => {
        CHECKED = !CHECKED;
        document.documentElement.style.setProperty("--light", CHECKED ? 1 : 0);
    });

    return (
        <div>



        </div>
    );
}

export default Features;
