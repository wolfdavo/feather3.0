import React from 'react'
import UpcomingClass from './upcomingClass'
import PageBreak from '../../images/pagebreak-websites.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


// import * as Firebase from 'firebase'

// const config = {
//     apiKey: process.env.GATSBY_API_KEY,
//     authDomain: process.env.GATSBY_AUTH_DOMAIN,
//     databaseURL: process.env.GATSBY_DATABASE_URL,
//     projectId: process.env.GATSBY_PROJECT_ID,
//     storageBucket: process.env.GATSBY_STORAGE_BUCKET,
//     messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
// };



class UpcomingClasses extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            // date: '',
            seats: 10
        }
    }

    // componentDidMount() {
    //     Firebase.initializeApp(config);
    //     const seatsRef = Firebase.database().ref('seats');

    //     seatsRef.on('value', (snapshot) => {
    //         let seats = snapshot.val();
    //         for (const upcoming in seats) {
    //             const classDate = seats[upcoming].date
    //             const classSeats = seats[upcoming].seats
    //             this.setState({
    //                 date: classDate,
    //                 seats: classSeats
    //             })
    //             console.log(this.state)
    //         }
    //     });
    // }


    render(){
        return(
            <div className="classes-body">
            <h1 className="classes-header dark"><h1 className="class-header-txt">Upcoming Classes</h1><br/><br/><img className="wave-pagebreak" src={PageBreak} alt="Page Break"/></h1>
            

                <h2 className="class-location"><FontAwesomeIcon icon={faMapMarkerAlt}/> Galena, IL</h2>
                <p className="class-description"></p>
                    <UpcomingClass seats={this.state.seats}/>

            </div>
        )
    }
}

export default UpcomingClasses;