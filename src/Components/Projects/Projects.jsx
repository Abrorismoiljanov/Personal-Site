import React from "react";
import "./style.css"

import PCard from "./ProjectCards/Projectcard";

function Projects(){
    return(
        <>
        <div className="Projects">
            <div className="ProjectHolder">
            <PCard img={"SDL.jpg"} name={"2D Entity component system"} 
            desc={"ECS system in C++"} link={"https://github.com/Abrorismoiljanov/2Dgameengine"}/>

             <PCard img={"amp.jpg"} name={"Abror`s music player"} 
            desc={"Just a CLI music player for Linux"} link={"https://github.com/Abrorismoiljanov/amp"}/>
            
             <PCard img={"gameengine.jpg"} name={"Abror`s Level Editor"} 
            desc={"3D map editor made in C++ and OpenGL"} link={"https://github.com/Abrorismoiljanov/2Dgameengine"}/>
            
             <PCard img={"calculator.jpg"} name={"React Calculator"} 
            desc={"Simple Calculator on React"} link={"https://github.com/Abrorismoiljanov/calculator"}/>
            
             <PCard img={"self.jpg"} name={"My Site"} 
            desc={"Yeah yeah whatever here`s the source code"} link={"https://github.com/Abrorismoiljanov/Personal-Site"}/>
            </div>
        </div>
        </>
    )
}

export default Projects