import React from 'react'
import { Link } from 'gatsby'
import Logo from './assets/featherNavLogo.png'

class Navbar extends React.Component {
    render(){
        return(
            <nav className="navbar">
                <img src={Logo} className='navLogo'/>
                <ul className="navMenu">
                    <li><Link className="menuItem" to='/'>Home</Link></li>
                    <li><Link className="menuItem" to="/classes">Classes</Link></li>
                    <li><Link className="menuItem" to="/contact">Get in touch</Link></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;