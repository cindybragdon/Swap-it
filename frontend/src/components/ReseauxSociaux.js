
import React from "react";

const ReseauxSociaux = (props) => {
    return (
        <div className="col">
            {props.userName}
            <br/>
            <a href={"https://github.com/" + props.gitHubUsername} target="_blank"
               rel="noopener noreferrer">
                <i className="bi bi-github fa-2x h4 text-dark " ></i>
            </a>
            <a href={"https://www.linkedin.com/in/" + props.linkedinUsername} target="_blank"
               rel="noopener noreferrer">
                <i className="bi bi-linkedin fa-2x h4 text-dark"></i>
            </a>
        </div>
    );
}

export default ReseauxSociaux;