import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContentHolder from './Components/MainContent/Contentholder'
import Navigation from './Components/navigation/Navigation'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'

import backgroundsrc from "src/assets/synthwave-aesthetics-moewalls-com.mp4"


function App() {
  const [background, setbackground] = useState(backgroundsrc);

  const [currentPage, setCurrentPage] = useState("Home");

  const pages = {
    Home,
    About,
    Projects,
  }

  return (
    <>
     <video className="background" src={background} autoPlay loop playsInline mute ></video>
     <div className="layout">
      <Navigation setCurrentPage={setCurrentPage}/>
     <ContentHolder Load={pages[currentPage]}/>
      <Navigation/>
     </div>
    </>
  )
}

export default App
