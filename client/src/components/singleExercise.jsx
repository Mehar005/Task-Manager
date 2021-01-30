import React from 'react';
import { Link } from 'react-router-dom'


const Exercise = ({exercise, deletehandler}) => {

    
    return(
        
            <tr>
                <td>{exercise.username}</td>
                <td>{exercise.description}</td>
                <td>{exercise.duration}</td>
                <td>{exercise.date.substring(0,10)}</td>
                <td>
                <Link to = {`/update/${exercise._id}`}>Edit</Link> | <a href='#' onClick = {() => deletehandler(exercise._id)}>Delete</a>
                </td>
            </tr>
        
    )
}

export default Exercise;