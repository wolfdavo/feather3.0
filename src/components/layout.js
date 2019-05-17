import React from 'react'
import Navbar from './navbar/navbar.js'
import Footer from './footer'
import Firebase, { FirebaseContext } from './Firebase'

export default ({ children }) => 

    <FirebaseContext.Provider value={new Firebase()}>
        <Navbar/>
        {children}
        <Footer/>
    </FirebaseContext.Provider>

