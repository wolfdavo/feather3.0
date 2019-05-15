import React from "react"
import Img from 'gatsby-image'
import Button from '../widgets/button'

//############   PROPS   #################

// IMAGE (PASSED DOWN FROM GRAPHQL QUERY)

// HEADERTEXT

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
                    <Button styleProp="btn-solid" text={this.props.btnText}to="contact"/>
                );  
                
            case "classes-btn":
                return(
                    <Button styleProp="btn-solid" text={this.props.btnText} to="classes"/>
                )
        
            default:
                break;
        }
    };

    render(){
        return(
            <div className="card-body">
                <div className="card-img-wrapper"><Img fluid={this.props.image} style={{alignSelf: "center"}}/></div>

                <div className="card-text-wrapper"><h2 className="card-header">{this.props.headerText}</h2><p className="card-text">{this.props.text}</p></div>

                <div className="cta">{this.RenderButtons()}</div>
            </div>
        )
    }

}

export default ServiceCard;