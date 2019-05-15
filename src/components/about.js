import React from 'react'
import Button from './widgets/button.js'
import Arrow from './widgets/arrow'

class AboutSection extends React.Component {

    render(){
        return(
            <div className="about">
                <p className="about-body">"At <span className="blue-text">Feather</span>, we aim to provide small business owners with a <span className="blue-text">person to person</span> solution to getting a strong online presence. We take care of <span className="blue-text">website</span> design, <span className="blue-text">social media</span> management, and general <span className="blue-text">IT</span> problems. Aditionally, we host <span className="blue-text">local classes</span> for those of you wanting to pick up <span className="blue-text">new skills</span> to grow your business yourself." - David, Founder</p>
                {/*<Button style="btn-solid" text="Get in touch"/>*/}
                <Arrow/>
            </div>
        )
    }
}

export default AboutSection;