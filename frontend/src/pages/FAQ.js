import React, { useState } from 'react';
import questionsAnswers from "../Data/QuestionsAnswers";

const FAQ = () => {
    const [openItemId, setOpenItemId] = useState(null);

    const toggleItem = (itemId) => {
        if (openItemId === itemId) {
            setOpenItemId(null); // Close the item if it is already open
        } else {
            setOpenItemId(itemId); // Open the item and close others
        }
    };


    return (
        <div className='hero oui'>
            <div className='container'>
                <h1>Page FAQ</h1>
                <p>Parce que parfois, tout comprendre seul, c'est pas un cadeau!</p>
                <div className="accordion" id="accordionExample">
                    {questionsAnswers.map((questionAns) => (
                        <div className="card" key={questionAns.itemId}>
                            <div className={`card-header ${questionAns.itemId === openItemId ? '' : 'collapsed'}`} id={`heading${questionAns.itemId}`}>
                                <h2 className="mb-0">
                                    <button
                                        className="btn btn-link text-info"
                                        type="button"
                                        onClick={() => toggleItem(questionAns.itemId)}
                                        aria-expanded={openItemId === questionAns.itemId}
                                        aria-controls={`collapse${questionAns.itemId}`}
                                    >
                                        {`Question ${questionAns.itemId} : ${questionAns.question}`}
                                    </button>
                                </h2>
                            </div>

                            <div id={`collapse${questionAns.itemId}`} className={`collapse ${openItemId === questionAns.itemId ? 'show' : ''}`} aria-labelledby={`heading${questionAns.itemId}`}>
                                <div className="card-body">
                                    {questionAns.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
