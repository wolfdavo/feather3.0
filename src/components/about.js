import React from 'react'
import Button from 'button.js'

class AboutSection extends React.Component {
    render(){
        return(
            <div className="about">
                <h1 className="about-header">What do we offer?</h1>
                <p className="about-body">Feather Consulting offers a face to face solution for all the difficult tech problems that come with running a small business. We take care of website design, social media management, and general IT help so you can focus on what you love.</p>
                <Button style="btn-solid" text="Get in touch"/>
            </div>
        )
    }
}

export default AboutSection;