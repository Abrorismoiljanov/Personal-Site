import React, { Children } from "react";
import "./style.css"

function Button({children, target, setCurrentPage}){

    return(
        <>
        <button className="btn" onClick={() => setCurrentPage(target)}>
            {children}
        </button>
        </>
    )
}

export default Button