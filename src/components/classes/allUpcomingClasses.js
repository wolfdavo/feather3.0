import React from 'react'
import firebase from "../Firebase/firebase"
import UpcomingClass from './upcomingClass'

class UpcomingClasses extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            date: '',
            seats: ''
        }
    }

    componentDidMount() {
        const seatsRef = firebase.database().ref('seats');

        seatsRef.on('value', (snapshot) => {
            let seats = snapshot.val();
            for (const upcoming in seats) {
                const classDate = seats[upcoming].date
                const classSeats = seats[upcoming].seats
                this.setState({
                    date: classDate,
                    seats: classSeats
                })
                console.log(this.state)
            }
        });
    }


    render(){
        return(
            <div className="classes-body">
            <h1 className="classes-header">Upcoming Classes</h1>

                <h2 className="class-location">☉ Galena, IL</h2>
                <p className="class-description"></p>
                    <UpcomingClass seats={this.state.seats}/>

            </div>
        )
    }
}

export default UpcomingClasses;