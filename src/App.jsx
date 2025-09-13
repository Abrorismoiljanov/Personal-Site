import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContentHolder from './Components/MainContent/Contentholder'
import Navigation from './Components/navigation/Navigation'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'



function App() {


  const [currentPage, setCurrentPage] = useState("Home");

  const pages = {
    Home,
    About,
    Projects,
  }

  return (
    <>
     <video className="background" src="/video.mp4" autoPlay loop playsInline muted ></video>
     <div className="layout">
      <Navigation setCurrentPage={setCurrentPage}/>
     <ContentHolder Load={pages[currentPage]}/>

     </div>
    </>
  )
}

export default App
