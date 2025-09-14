import React from "react";
import "./style.css"

function Card({image, text}){
    return(
        <>
        <div className="card">
            <img src={image} alt="" />
            {text}
        </div>
        </>
    )
}

export default Card
