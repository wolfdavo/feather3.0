import React from "react"
import { Helmet } from "react-helmet" 
import Layout from "../components/layout"

export default class Homepage extends React.Component{

    render(){
        
        return(
            <Layout>
            <Helmet>
                <title>Feather Consulting</title>
            </Helmet>
            </Layout>
        )
    }
}
