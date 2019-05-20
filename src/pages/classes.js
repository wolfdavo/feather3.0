import React from "react"
import { Helmet } from "react-helmet" 
import Layout from "../components/layout"
import UpcomingClasses from '../components/classes/allUpcomingClasses'

export default class Homepage extends React.Component{

    render(){
        
        return(

            <Layout>
            <Helmet>
                <title>Feather Consulting - classes</title>
            </Helmet>
            <UpcomingClasses/>
            </Layout>
        )
    }
}
