import React from "react";
import "./style.css"

function About(){

    return(
        <>
        <div className="About">
        <div className="Info">
               <h1>About me</h1>
             <p>Ah what to say? I myself always loved Computer. I started with 3D modeling when I was 13.
                 Below you can see my 3D modeling works from the past</p>
                 <div className="image"> <img src="book.jpg" alt="" /> </div>
                      
                <p>Basically kind of a big deal. You see this things are made by me like a years ago</p>
                <div className="image"> <img src="sword.jpg" alt="" /> </div>
                <p> This is not all after all and just for demo</p>
                <div className="image"> <img src="portal.jpg" alt="" /> </div>

                <h1>my Coding</h1>
                <p>I had a decend experience in coding. I have started from Web And learned till Css.
                Then I decided to learn Game dev because I firstly felt like Web is limiting me. and it was. 
                For a long time I have tried Unity, Unreal and etc. but in the end I Finally ended with Linux.
                Out of Curiosity of course. When with Linux it was easier for me to set up C++ and enviorement for
                overall coding. Since Linux was about Configs and etc I finally entered a real coding. I have developed a lot of things
                in C++ and some in C. you can check them in my Github.

                Below you can see some images of my programs:
                </p> 
                <h1>ECS system with SDL</h1>
            <div className="image"> <img src="SDL.jpg" alt="" /> </div>
               <h1>Abror`s Music player</h1>
           <div className="image"> <img src="amp.jpg" alt="" /> </div>
               <h1>Custom Level editor with support of .obj </h1>
            <div className="image"> <img src="gameengine.jpg" alt="" /> </div>

            <h1>Web</h1>
            <p>So after all this journey I decided to build this site both for work and as a coder.
                this site an good Example I think for you see my React and Frontend knowledge.</p>
        </div>
        </div>
        </>
    )
}

export default About