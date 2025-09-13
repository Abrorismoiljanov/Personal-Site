import React from "react";
import "./style.css"

import Button from "../Buttons/button";

function Navigation({setCurrentPage}){

    return(
        <>
        <div className="nav">
        <Button target={"Home"} children={"Home"} setCurrentPage={setCurrentPage}/>
        <Button target={"About"} children={"About me"} setCurrentPage={setCurrentPage}/>
        <Button target={"Projects"} children={"Projects"} setCurrentPage={setCurrentPage}/>
        </div>
        </>
    )
}

export default Navigation;