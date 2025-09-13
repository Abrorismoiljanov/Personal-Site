import React from "react";
import "./style.css"

function ContentHolder({Load}){
    return(
        <>
        <div className="contentholder">{Load ? <Load/> : <></>}</div>
        </>
    );
}

export default ContentHolder