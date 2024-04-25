import React, { useState } from 'react';
import questionsAnswers from "../Data/QuestionsAnswers";
import BackToTopButton from "../components/BackToTopButton";
import ImageFAQ from "../images/FAQBG.jpg";

const FAQ = () => {

    var sectionStyle = {
        backgroundImage: `url(${ImageFAQ})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        fontFamily: "Reddit Mono",
        border: 'white solid 3px',
        minHeight: '85vh'
    }

    const [openItemId, setOpenItemId] = useState(null);

    const toggleItem = (itemId) => {
        if (openItemId === itemId) {
            setOpenItemId(null); // Close the item if it is already open
        } else {
            setOpenItemId(itemId); // Open the item and close others
        }
    };


    return (
        <div className='card  text-center p-3' style={sectionStyle} >
           <div className="card p-2 w-50" style={{ backgroundColor: "white"}} id="container-faq">
            <div className='d-block align-middle'>
                <h2 id="faqText" className=" p-2" style={{ backgroundColor: "darkgrey"}}>Parce que parfois, tout comprendre seul, c'est pas un cadeau!</h2>
                <div className="accordion" id="accordionExample">
                    {questionsAnswers.map((questionAns) => (
                        <div className="card "   key={questionAns.itemId}>
                            <div className={`card-header  ${questionAns.itemId === openItemId ? '' : 'collapsed'}`} id={`heading${questionAns.itemId}`} style={{ backgroundColor: "darkgrey"}}>
                                <h2 className="mb-0">
                                    <button
                                        id="link-text"
                                        className="btn btn-link text-dark"
                                        type="button"
                                        onClick={() => toggleItem(questionAns.itemId)}
                                        aria-expanded={openItemId === questionAns.itemId}
                                        aria-controls={`collapse${questionAns.itemId}`}
                                    >
                                        {`Question ${questionAns.itemId} : ${questionAns.question}`}
                                    </button>
                                </h2>
                            </div>

                            <div  id={`collapse${questionAns.itemId}`} className={`collapse ${openItemId === questionAns.itemId ? 'show' : ''}`} aria-labelledby={`heading${questionAns.itemId}`} style={{ backgroundColor: "lightgrey"}}>
                                <div className="card-body" >
                                    {questionAns.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <BackToTopButton />
            </div>
           </div>
        </div>

    );
};

export default FAQ;
