import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import {Home} from './Components/Home'
import {About} from './Components/About'
import {Contact} from './Components/Contact'
import {Skills} from './Components/Skills'


const App = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/skills' element={<Skills/>}/>
            </Routes>
        </>
    )
}

export default App
