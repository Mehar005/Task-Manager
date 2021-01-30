import axios from 'axios';
import React from 'react'; 
import Exercise from './singleExercise';
export default class ExerciseList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            exercises : []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/exercises')
            .then(res => {
                this.setState({
                    exercises: res.data
                })
            })
            .catch(err => console.log(err.message))
    }
    deletehandler = (id) => {
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.message));

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    render() {
        return(
            <div>
             <table className='table'>
                <thead>
                <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration(in minutes)</th>
                    <th>Date</th>
                    <th>Acitons</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.exercises.map(exercise => (
                            <Exercise key={exercise._id }
                             exercise = {exercise}
                             deletehandler = {this.deletehandler}
                               />
                        ))
                    }
                </tbody>
             </table>
            </div>
        )
    }
}