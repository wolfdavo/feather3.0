import React from "react"
import { Helmet } from "react-helmet" 
import Layout from "../components/layout"

export default class Homepage extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        
        return(
            <Layout>
            <Helmet>
                <title>Feather Consulting - Get in Touch</title>
            </Helmet>
            </Layout>
        )
    }
}