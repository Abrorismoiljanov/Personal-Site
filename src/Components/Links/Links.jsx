import React from "react";
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';

function Links(){
    return(
        <>
        <div className="Links">
            <ul className="list">
                <li><a href="https://www.youtube.com/@Krubka_1" target="_blank">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
                You tube</a></li>
                <li><a href="https://t.me/Krubka1" target="_blank">
                 <FontAwesomeIcon icon={faTelegram} size="2x" />
                Telegram</a></li>
                <li><a href="https://github.com/Abrorismoiljanov" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
                Git hub</a></li>
                <li><a href="https://t.me/lowlevelUZ" target="_blank">
                <FontAwesomeIcon icon={faTelegram} size="2x" />
                Telegram channel</a></li>
            </ul>
        </div>
        </>
    )
}

export default Links