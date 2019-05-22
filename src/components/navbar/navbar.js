import React from 'react'
import { Link } from 'gatsby'
import Logo from './assets/featherNavLogo.png'
import Dropdown from './dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

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
                <Link to="/"><img alt="feather consulting nav logo" src={Logo} className='navLogo'/></Link>
                <ul className='navMenu'>
                    <li><Link className="menuItem" to='/'>Home</Link></li>
                    <li><Link className="menuItem" to="/classes">Classes</Link></li>
                    <li><Link className="menuItem" to="/social-media-management">Social Media Management</Link></li>
                    <li><Link className="menuItem" to="/websites">Websites</Link></li>

                </ul>
                <div onClick={this.toggleDropDownMenu} className={"navToggleButton " + this.state.dropdownState + "Toggler"}><FontAwesomeIcon icon={faAngleDown}/></div>
            </nav>
            </div>
        )
    }
}

export default Navbar;