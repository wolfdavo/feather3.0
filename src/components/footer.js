import React from 'react'
import Logo from '../images/footerLogo.png'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
            <div className="footer-logo-wrapper"><img src={Logo} className="footer-logo" alt="Feather Consulting"/></div>
                <div className="footer-contact">
                    <ul>
                        <li>Feather Consulting © 2019</li>
                        <li>Phone: <a href="tel:6514429483">+1 (651) 442 9483</a></li>
                        <li>Email: david@featherconsulting.net</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;