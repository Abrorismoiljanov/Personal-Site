import React from "react";
import "./style.css"

function PCard({name, img, link, desc}){
    return(
        <>
        <div className="Pcard">
        <div className="Ipcard">
        <img src={img} alt="" />
        <div className="information">
            <h1>{name}</h1>
            <p>{desc}</p>
            <div className="af">
                <a href={link} target="_blank">Git hub link</a>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default PCard