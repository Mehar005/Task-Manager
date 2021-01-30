import React from 'react';
import axios from 'axios';

export default class AddUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: ''
        }
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const user = {
            username: this.state.username
        }
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.message));
        this.setState({
            username: ''
        })
    }

    render() {
        return(
            <div>
            <h3>Create New User</h3>
             <form onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label>User Name</label>
                    <input
                     name = 'username'
                     value = {this.state.username}
                     type='text'
                     className='form-control'
                     onChange = {this.handleChange}
                     />
                </div>
                <div className='form-group'>
                    <input type = 'submit' value = 'Create User' className = 'btn btn-primary' />
                </div>
             </form>
            </div>
        )
    }
}