import React from "react"
import ServiceCard from './serviceCard'

class Popular extends React.Component {

    render(){
        return(
            <div className="popular-section">
                <ServiceCard 
                image={this.props.images.website} 
                headerText="Website Design" 
                text="" 
                buttons="contact-btn"
                btnText="Get online"/>

                <ServiceCard 
                image={this.props.images.social} 
                headerText="Social Media Management" 
                text="This is a test" 
                buttons="contact-btn"
                btnText="Start growing"/>

                <ServiceCard 
                image={this.props.images.classes} 
                headerText="Classes" 
                text="" 
                buttons="classes-btn"
                btnText="Upcoming Classes"/>
            </div>
        )
    }
}

export default Popular;