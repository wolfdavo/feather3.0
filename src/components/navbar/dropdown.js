import React from 'react'
import { Link } from 'gatsby'

class Dropdown extends React.Component {

    render(){
        return(<nav className={'dropdown ' + this.props.decider}>
        <ul>
        <li><Link className="menuItem" to='/'>Home</Link></li>
        <li><Link className="menuItem" to="/classes">Classes</Link></li>
        <li><Link className="menuItem" to="/social-media-management">Social Media Management</Link></li>
        <li><Link className="menuItem" to="/websites">Websites</Link></li>

        </ul>
    </nav>)
    }
    
}

export default Dropdown;