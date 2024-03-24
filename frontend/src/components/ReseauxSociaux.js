import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const ReseauxSociaux = (props) => {
    return (
        <div className="col">
            {props.userName}
            <br/>
            <a href={"https://github.com/" + props.gitHubUsername} target="_blank"
               rel="noopener noreferrer">
                <i className="bi bi-github fa-2x text-dark " ></i>
            </a>
            <a href={"https://www.linkedin.com/in/" + props.linkedinUsername} target="_blank"
               rel="noopener noreferrer">
                <i className="bi bi-linkedin fa-2x"></i>
            </a>
        </div>
    );
}

export default ReseauxSociaux;