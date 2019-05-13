import React from "react"
import { Helmet } from "react-helmet" 
import Layout from "../components/layout"
import Hero from '../components/hero'
import AboutSection from '../components/about'

export default class Homepage extends React.Component{

    render(){
        
        return(
            <Layout>
            <Helmet>
                <title>Feather Consulting</title>
            </Helmet>
            <Hero data={this.props.data}/>
            <AboutSection/>
            </Layout>
        )
    }
}

export const query = graphql`
  query {
    file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }`