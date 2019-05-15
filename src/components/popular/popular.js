import React from "react"
import ServiceCard from './serviceCard'

class Popular extends React.Component {

    render(){
        return(
            <div>
                <ServiceCard image={this.props.images} text="This is a test" buttons="contact-btn"/>
                <ServiceCard image={this.props.images} text="" buttons=""/>
                <ServiceCard image={this.props.images} text="" buttons=""/>
            </div>
        )
    }
}

export default Popular;