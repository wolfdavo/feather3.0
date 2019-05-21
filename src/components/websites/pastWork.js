import React from 'react'

//Props are:

// link
// color
// title

export default class PastWork extends React.Component {
    render(){
        let color = this.props.color
        return(
            <div className="past-work" style={{backgroundColor: color}}>
            <a target="_blank" rel="noopener noreferrer" href={this.props.link}>{this.props.title}</a>
            </div>
        )

    }
}