import React from 'react'
import Img from 'gatsby-image'

class Hero extends React.Component{
    render(){
        return(
            <div>
                <Img fluid={this.props.data.file.childImageSharp.fluid} style={{height: '100vh', width: 'auto'}}/>
                <div className="heroText">
                    <h1 className="heroBold"><b>Mind your own business.</b></h1>
                    <h2 className="heroItalic"><i>We'll take care of the rest</i></h2>
                </div>
            </div>
        )
    }

}


export default Hero;