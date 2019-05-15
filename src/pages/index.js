import React from "react"
import { Helmet } from "react-helmet" 
import Layout from "../components/layout"
import Hero from '../components/hero'
import AboutSection from '../components/about'
import Popular from '../components/popular/popular'

export default class Homepage extends React.Component{

    render(){
        
        return(
            <Layout>
            <Helmet>
                <title>Feather Consulting</title>
            </Helmet>
            <Hero image={this.props.data.heroImage}/>
            <AboutSection/>
            <Popular images={this.props.data.socialMediaImage} />
            </Layout>
        )
    }
}






export const query = graphql`
  query FetchImages{

    heroImage: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1920) {
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