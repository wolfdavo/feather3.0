import React from "react"
import { Helmet } from "react-helmet" 
import Layout from "../components/layout"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import ServiceCard from '../components/popular/serviceCard'
import PageBreak from '../images/pagebreak-websites.svg'
import PastWork from '../components/websites/pastWork'

export default class Homepage extends React.Component{

    render(){
        
        return(

            <Layout>
            <Helmet>
                <title>Feather Consulting - websites</title>
            </Helmet>

            <div className="classes-body websites-page">
                <h1 className="classes-header">Websites</h1>
                <img className="wave-pagebreak wave-flipped" src={PageBreak} alt="Page Break"/>

                    <div className="smm-banner">
                        <div className="banner-content">
                        <div className="img-wrapper"><Img fluid={this.props.data.webImage.childImageSharp.fluid}/>
                        </div>
                        
                        <h3 className="smm-banner-text">Getting a good website for your business can be a daunting and expensive process. At Feather, we're committed to providing you with a one-on-one developer experience at a very affordable price. Wether you're just looking for a place on the web to put your store hours, or you're wanting a full fledged e-commerce website, we've got you covered.
                        <br/>
                        <br/>
                        *Pricing Guarentee*
                        <br/>
                        We keep our quoting and pricing standards very high to ensure that you always know exactly what you'll pay. 
                        <br/>
                        We will NEVER conduct any work without first confirming what we're doing, and how much it will cost. 
                        <br/>
                        We will NEVER charge more than quoted. 
                        <br/>
                        <br/>
                        To get in touch with David (our lead developer), please call  <a href="tel:6514429483">651 442 9483</a> or email him at david@featherconsulting.net
                        </h3>
                        </div>
                    </div>
                    <div className="dark-section">
                    <div className="website-options">

                        <ServiceCard
                        borderStyle="blackBorder"
                        image={this.props.data.webExisting.childImageSharp.fluid}
                        headerText="Existing Website Redesign and Maintenence"
                        text="Already have a website but not quite happy with it? One of our designers can have a look to see what we can do. We charge $30/hour, all work quoted before conducted."
                        price="$30/hour"
                        />

                        <ServiceCard
                        borderStyle="blackBorder"
                        image={this.props.data.webStatic.childImageSharp.fluid}
                        headerText="Small Business Website"
                        text="Our static website is most popular amoung small business owners. Affordable, custom, and perfect for getting your business out on the web! With up to 3 pages, some of our clients like to have a home page, about us page, and contact us page, while others like to put it all on one for ease of use. You'll get to work one-on-one with one of our developers (perhaps over a coffee?) to make sure you're excited and delighted with your new website."
                        price="$299 + domain + $30/month hosting"
                        />

                        <ServiceCard
                        borderStyle="blackBorder"
                        image={this.props.data.webAdvanced.childImageSharp.fluid}
                        headerText="E-Commerce or Advanced Website"
                        text="Wanting to sell your products online, or need more than 3 pages? We offer e-commerce development and fully custom websites on a quote by quote basis. Get in touch with us (contact info in footer) to get an obligation-free quote today!"
                        price="Quote-by-quote"
                        />

                    </div>
                    <img className="wave-pagebreak" src={PageBreak} alt="Page Break"/>
                    </div>


                    <h2 className="section-title">Past Work</h2>
                    <div className="testimony-section">
                    


                        <PastWork
                        link="https://seedpodz.com/"
                        color="#48A1FF"
                        title="SeedPodz"/>

                        <PastWork
                        link="https://www.ovan.shop"
                        color="#000"
                        title="OVAN"/>

                        <PastWork
                        link="https://petalsandprimitives.com/"
                        color="#2E0033"
                        title="Petals & Primitives"/>

                    </div>

            </div>
            </Layout>
        )
    }
}

export const query = graphql`
  query {

    webImage: file(relativePath: { eq: "website.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    },

    webExisting: file(relativePath: { eq: "webExisting.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    },

    webStatic: file(relativePath: { eq: "webStatic.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    },

    webAdvanced: file(relativePath: { eq: "webAdvanced.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
}`
