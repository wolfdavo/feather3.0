import React from 'react'
import Link from 'gatsby'

class Button extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            //takes either btn-outline, or btn-solid as a class.
            <Link to="contact" className={'btn '+this.props.style}>{this.props.text}</Link>
        )
    }
}

export default Button;