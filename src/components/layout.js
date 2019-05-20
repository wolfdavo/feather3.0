import React from 'react'
import Navbar from './navbar/navbar.js'
import Footer from './home/footer'

export default ({ children }) => 

    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>

