import React from "react"
import { Helmet } from "react-helmet" 
import Layout from "../components/layout"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Plans from '../components/social/plans'
import PageBreak from '../images/pagebreak-websites.svg'



export default class Homepage extends React.Component{

    render(){
        
        return(
            <Layout>
            <Helmet>
                <title>Feather Consulting - Social Media Management</title>
            </Helmet>
            <div className="classes-body">
            <h1 className="classes-header">Social Media Management Plans</h1>
            <img className="wave-pagebreak wave-flipped" src={PageBreak} alt="Page Break"/>
            <div className="smm-banner">
                <div className="banner-content">
                <div className="img-wrapper"><Img fluid={this.props.data.socialMediaImage.childImageSharp.fluid}/>
                </div>
                
                <h3 className="smm-banner-text">Our aim at Feather is to take weight off your shoulders. One of the ways we do that is helping you manage your social media. <br/> Once a month, one of our team members will come in to take photos of your business/products, write captions, schedule posts, and find ways to increase organic growth. Take a look below at the four different plans we have available, each one varying in post frequency.
                <br/>
                <br/>
                To get in touch with one of our social media managers, please call us at <a href="tel:6514429483">651 442 9483</a> or email David at david@featherconsulting.net
                </h3>
                </div>
            </div>

            <Plans/>
            </div>
            </Layout>
        )
    }
}



export const query = graphql`
  query {

    socialMediaImage: file(relativePath: { eq: "social.png" }) {
        childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
        }
        }
    }
}`