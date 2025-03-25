import React from 'react'
import Navbar from '../../Componets/Navbar/Navbar'
import Contact from '../../Componets/Contact/Contact'
import About from '../../Componets/About/About'
import Projects from '../../Componets/Projects/Projects'
const HomePage:React.FC = () => {
  return (
    <div >
        <Navbar/>
        <Contact/>
        <Projects/>
        <About/>

    </div>
  )
}

export default HomePage