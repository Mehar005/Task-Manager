import React from 'react';
import { Link } from 'react-router-dom'


export default class Navbar extends React.Component {
    render(){
        return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to='/' className="navbar-brand">Task Manager</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link to='/' className="nav-link"> Task List </Link>
            </li>
            <li className="nav-item">
            <Link to='/add' className="nav-link"> Create Task </Link>
            </li>
            <li className="nav-item">
            <Link to='/users/add' className="nav-link"> Add User </Link>
            </li>
          </ul>
        </div>
      </nav>  
        </div>
        )
    }
        
}