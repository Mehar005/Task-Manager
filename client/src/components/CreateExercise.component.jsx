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
        axios.get('http://localhost:5000/users')
            .then(res => {
                if(res.data.length > 0){
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    });
                }
            })
            .catch(err => console.log(err.message))
        
        
    }

    handleChange = e => {
        const {value, name} = e.target
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
        axios.post('http://localhost:5000/exercises/add', exercise)
        .then(result => console.log(result.data))
        .catch(err => console.log(err.message));

        

        window.location = '/'

    }
    
    render() {
        return(
            <div>
             <h3>Create New Task</h3> 
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
                    <input type = 'submit' value = 'Create Task' className = 'btn btn-primary' />
                </div>
             </form>
            </div>
        )
    }
}