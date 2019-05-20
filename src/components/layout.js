import React from 'react'
import Navbar from './navbar/navbar.js'
import Footer from './footer'

export default ({ children }) => 

    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>

