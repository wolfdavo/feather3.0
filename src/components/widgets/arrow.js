import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

class Arrow extends React.Component {
    render(){
        return(
            <FontAwesomeIcon icon={faAngleDoubleDown} size="2x" className="arrow-bounce" />
        )   
    }
}

export default Arrow;