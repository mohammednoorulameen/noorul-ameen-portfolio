import React from 'react'
import Navbar from '../../Componets/Navbar/Navbar'
import Contact from '../../Componets/Contact/Contact'
import About from '../../Componets/About/About'
import Highlights from '../../Componets/Highlights/Highlights'
const HomePage:React.FC = () => {
  return (
    <div >
        <Navbar/>
        <Contact/>
        <Highlights/>
        <About/>

    </div>
  )
}

export default HomePage