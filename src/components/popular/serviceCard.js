import React from "react"
import Img from 'gatsby-image'
import Button from '../widgets/button'

//############   PROPS   #################

// IMAGE (PASSED DOWN FROM GRAPHQL QUERY)

// TEXT

// BUTTONS:
//      CONTACT-BTN
//      CLASSES-BTN




class ServiceCard extends React.Component{
    constructor(props){
        super(props);

        this.RenderButtons = this.RenderButtons.bind(this);
    }

    RenderButtons = () => {
        switch (this.props.buttons) {
            case "contact-btn":
                return(
                    <Button style="btn-outline" text="Get in touch" to="contact"/>
                );  
                
            case "classes-btn":
                return(
                    <Button type="btn-solid" text="Upcoming Classes" to="classes"/>
                )
        
            default:
                break;
        }
    };

    render(){
        return(
            <div className="card-body">
                <div className="card-img-wrapper"><Img fluid={this.props.image.childImageSharp.fluid}/></div>

                <div className="card-text-wrapper"><p className="card-text">{this.props.text}</p></div>

                <div className="cta">{this.RenderButtons()}</div>
            </div>
        )
    }

}

export default ServiceCard;