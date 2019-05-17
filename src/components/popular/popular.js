import React from "react"
import ServiceCard from './serviceCard'

class Popular extends React.Component {

    render(){
        return(
            <div className="popular-section">
                <ServiceCard 
                image={this.props.images.website} 
                headerText="Website Design" 
                text="Our developers work one-on-one with you (in person) to build a website that will showcase your business beautifully. We offer anything from a static site to display hours, location, and a little bit about your business to a full-fledged ecommerce marketplace." 
                buttons="contact-btn"
                btnText="Learn More"/>

                <ServiceCard 
                image={this.props.images.social} 
                headerText="Social Media Management" 
                text="Take a look at our social media management plans! We take care of everything - photos, post scheduling, captions, replying to comments, the whole lot. Now you can take a breather knowing your online presence is always active and growing." 
                buttons="contact-btn"
                btnText="See plans"/>

                <ServiceCard 
                image={this.props.images.classes} 
                headerText="Classes" 
                text="Want to learn how to schedule posts, find the best hashtags,and manage your businesses online presence? We host local classes demonstrating step-by-step everything you need to know to grow you business online in 2019." 
                buttons="classes-btn"
                btnText="Upcoming Classes"/>
            </div>
        )
    }
}

export default Popular;