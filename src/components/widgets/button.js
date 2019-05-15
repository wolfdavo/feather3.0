import React from 'react'
import { Link } from 'gatsby'

class Button extends React.Component {
    
    render(){
        return(
            //takes either btn-outline, or btn-solid as a class.
            <Link to={this.props.to} className={'btn '+this.props.styleProp}>{this.props.text}</Link>
        )
    }
}

export default Button;