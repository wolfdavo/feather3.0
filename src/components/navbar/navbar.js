import React from 'react'
import { Link } from 'gatsby'
import Logo from './assets/featherNavLogo.png'
import Dropdown from './dropdown'

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dropdownState: 'closed'
        }

        this.toggleDropDownMenu = this.toggleDropDownMenu.bind(this);
    }

    toggleDropDownMenu = () => {
        if(this.state.dropdownState === 'closed'){
            this.setState({dropdownState: 'open'})
        }else if(this.state.dropdownState === 'open'){
            this.setState({dropdownState: 'closed'})
        }
    }

    render(){
        
        return(
            <div>
            <Dropdown decider={this.state.dropdownState}/>
            <nav className="navbar">     
                <img alt="feather consulting nav logo" src={Logo} className='navLogo'/>
                <ul className='navMenu'>
                    <li><Link className="menuItem" to='/'>Home</Link></li>
                    <li><Link className="menuItem" to="/classes">Classes</Link></li>
                    <li><Link className="menuItem" to="/social-media-management">Social Media Management</Link></li>
                </ul>
                <div onClick={this.toggleDropDownMenu} className={"navToggleButton " + this.state.dropdownState + "Toggler"}>&#11167;</div>
            </nav>
            </div>
        )
    }
}

export default Navbar;