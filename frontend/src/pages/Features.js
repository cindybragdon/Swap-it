import React from 'react';
import imageData from "../Data/images.js";


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
        <div className="container">
            <aside className="carousel">
                <div className="carousel__wrapper">
                    {imageData.map((item, i) => (
                        <div className="item" id={`slide-${i}`} key={i}>
                            <img src={imageData.image} alt="" width="418" height="418" />
                        </div>
                    ))}
                </div>
            </aside>
            <article className="instagram">
                <header className="instagram__header">
                    <figure>
                        <img
                            src="../images/Logo2.jpg"
                            alt="Swap it"
                            width="42"
                            height="42"
                        />
                        <figcaption>
                            <h4>Jake the Dog</h4>
                        </figcaption>
                    </figure>
                </header>
                <section className="instagram__media">
                    <div className="img"></div>
                </section>
                <footer className="instagram__buttons">
                    <div className="left">
                        {/* Icons would go here, using SVG or another React-friendly method */}
                    </div>
                    <div className="right">
                        {/* Icons would go here */}
                    </div>
                </footer>
            </article>
        </div>
    );
}

export default Features;
