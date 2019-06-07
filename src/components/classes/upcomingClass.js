import React from 'react'

class UpcomingClass extends React.Component {

    render(){
        return(
            <div className="margin">
                <div className="upcoming-class-wrapper">
                    <h2 className="class-type">Social Media Management for Small Businesses 101</h2>
                    <p>In this course, we learn the basics of social media management. How to set up business accounts on Facebook and Instagram, schedule posts, find hashtags, boost organic growth, and much more.</p>
                    <ul>
                        <li>
                        <h3>Experience level:</h3>
                        <p>Beginner</p>
                        </li>

                        <li>
                        <h3>Taught by:</h3>
                        <p>David Wolfenden</p>
                        </li>

                        <li>
                        <h3>Where:</h3>
                        <p>Galena Mini-Mall - exact location disclosed when you sign up!</p>
                        </li>

                        <li>
                        <h3>When:</h3>
                        <p>Tuesday, 06/18/2019 at 7:00 PM - 8:00 PM</p>
                        </li>

                        <li>
                        <h3>Cost:</h3>
                        <p>$20</p>
                        </li>

                        <li>
                        <h3>Seats remaining:</h3>
                        <p>{this.props.seats}</p>
                        </li>
                    </ul>
                    <h2 style={{textAlign: "center"}}>To reserve a seat, please call <br/><a href="tel:6514429483">651 442 9483</a><br/>or email david@featherconsulting.net</h2>
                </div>
            </div>

        )
    }
}

export default UpcomingClass;