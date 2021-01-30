import React from 'react'; 
import axios from 'axios';
import DatePicker from 'react-datepicker'
import  'react-datepicker/dist/react-datepicker.css';

export default class CreateExercise extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users : []
        }
    }
    componentDidMount(){
        axios.get(`http://localhost:5000/exercises/${this.props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                this.setState({
                    username: res.data.username,
                    description: res.data.description,
                    duration: res.data.duration,
                    date: new Date(res.data.date)

                })
            })
            .catch(err => console.log(err.message))

        axios.get('http://localhost:5000/users')
            .then(res => {
                this.setState({
                    users: res.data.map(user => user.username),
                });
            })
            .catch(err => console.log(err.message))
        
        
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    onDateChange = date => {
        this.setState({
            date: date
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise)
        axios.put(`http://localhost:5000/exercises/update/${this.props.match.params.id}`, exercise)
        .then(result => console.log(result.data))
        .catch(err => console.log(err.message));

        this.setState({
            username: '',
            description: '',
            duration: 0,
            date: new Date()
        })

        window.location = '/';

    }
    
    render() {
        return(
            <div>
             <h3>Update Task</h3> 
             <form onSubmit ={this.handleSubmit}>
                <div className='form-group'>
                    <label>Select User</label>
                    <select className = 'form-control'
                    required
                    name='username'
                    value={this.state.username}
                    onChange = {this.handleChange}
                    >
                    {
                        this.state.users.map( user => (
                            <option
                            value = {user}
                            key={user}
                            >
                            {user}
                            </option>
                        ) )
                    }
                    </select>
                </div>
                <div className = 'form-group'>
                    <label>Description </label>
                    <input className='form-control'
                    required
                    value={this.state.description}
                    name = 'description'
                    onChange = {this.handleChange}
                    ></input>
                </div>

                <div className = 'form-group'>
                    <label>Duration (in minutes)</label>
                    <input className='form-control'
                    required
                    value={this.state.duration}
                    name = 'duration'
                    onChange = {this.handleChange}
                    ></input>
                </div>

                <div className = 'form-group'>
                    <label> Date </label>
                    <div>
                        <DatePicker
                        name='date'
                        onChange = {this.onDateChange}
                        selected = {this.state.date}
                        />
                    </div>
                </div>
                <div className = 'form-group'>
                    <input type = 'submit' value = 'Update Task' className = 'btn btn-primary' />
                </div>
             </form>
            </div>
        )
    }
}