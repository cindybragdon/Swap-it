import React, {useEffect} from 'react';


// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

const BackToTopButton = () => {


    useEffect(() => {
        const mybutton = document.getElementById("myBtn");

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        window.onscroll = scrollFunction;

        // Cleanup function to remove the event listener
        return () => {
            window.onscroll = null;
        };
    }, []);

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <button onClick={topFunction} id="myBtn" title="Go to top">Top</button>
    );
};

export default BackToTopButton;
