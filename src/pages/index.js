import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet" 
import Layout from "../components/layout"
import Hero from '../components/home/hero'
import AboutSection from '../components/home/about'
import Popular from '../components/popular/popular'
import SignupForm from '../components/widgets/mailSignup'

export default class Homepage extends React.Component{

    render(){
      const imageProps = {
        social: this.props.data.socialMediaImage.childImageSharp.fluid,
        website: this.props.data.webImage.childImageSharp.fluid,
        classes: this.props.data.classesImage.childImageSharp.fluid
      }
        
        return(
            <Layout>
            <Helmet>
                <title>Feather Consulting</title>
            </Helmet>
            <Hero image={this.props.data.heroImage}/>
            <AboutSection/>
            <Popular images={imageProps} />
            <SignupForm title="Signup for specials and announcements!"/>
            </Layout>
        )
    }
}






export const query = graphql`
  query {

    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },

    socialMediaImage: file(relativePath: { eq: "social.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },

    webImage: file(relativePath: { eq: "website.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    },

    classesImage: file(relativePath: { eq: "classes.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

  }`