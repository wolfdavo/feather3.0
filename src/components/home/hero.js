import React from 'react'
import Img from 'gatsby-image'

class Hero extends React.Component{
    render(){
        return(
            <div>
                <Img fluid={this.props.image.childImageSharp.fluid} style={{height: '100vh', width: 'auto', zIndex: -100}}/>
                <div className="heroText">
                    <h1 className="heroBold"><b>Mind your own business.</b></h1>
                    <h2 className="heroSmall">We'll take care of the rest</h2>
                </div>
            </div>
        )
    }

}


export default Hero;