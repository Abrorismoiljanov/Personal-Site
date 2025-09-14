import React from "react";
import "./style.css"
import Card from "../CardRecommendation/Card";

function Home(){
    return(
        <>
        <div className="Home">

        <div className="profile">
            <div><img className="pfp" src="/pfp.jpg" alt="" /></div>
            <div className="text">
                <h1>Abror</h1>
                <h2>\\\\\\\\\\\\\\\\\</h2>
                <h2>Ismoiljanov___|</h2>
                <h2>/////////////////</h2>
                <h3>I want to Believe!</h3>
            </div>
        </div>
        <div className="maintext">
            <h1>Hello My name is Abror</h1>
            <p>
                I specialize in crafting immersive experiences, from high-performance C++ games to interactive React web apps.
                 I also bring worlds to life using Blender 3D and OpenGL, blending creativity with technology.
                 My passion is exploring the limits of coding, 3D design, and graphics, turning ideas into digital reality
            </p>
            <h2>My Skills</h2>
            <h4 className="point">↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓</h4>
            <div className="divs">
                <Card text={"I use Arch Linux daily and use WM Hyprland. I use it for my daily development too."} image={"Linuxlogo.png"} />
                <Card text={"C++ is one of my most favorite programming language. and yes we have Rust but as you can see there is no boykisser on my pfp"} image={"C++logo.png"} />
                <Card text={"What else can I say? This my Portfolio is built on React and you can check my Git hub or projects section if you want"} image={"Reactlogo.png"} />
            </div>
        </div>


        </div>
        </>
    )
}
export default Home