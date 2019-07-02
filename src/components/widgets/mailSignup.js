import React from 'react'
import addToMailChimp from 'gatsby-plugin-mailchimp'

export default class SignupForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let re = /\S+@\S+\.\S+/;
        if (re.test(this.state.email)) {
            addToMailChimp(this.state.email)
            alert("Thanks for signing up!")
        }else{
            alert("Please enter a valid email address.")
        }
    }

    render(){
        return(
            <div className="signup-form">
            <h3>{this.props.title}</h3>
                <form onSubmit={this.handleSubmit}>
                <input type="email" name="email"  placeholder="email" className="email-field" onChange={this.handleChange}></input>
                <input type="submit" value="Signup!" className="btn-solid form-btn"/>
                </form>
            </div>
        )
    }
}