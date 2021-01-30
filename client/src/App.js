import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route} from 'react-router-dom'
// importing components
import ExerciseList from './components/ExerciseList.component';
import CreateExercise from './components/CreateExercise.component';
import UpdateExercise from './components/UpdateExercise.component';
import DeleteExercise from './components/DeleteExercise.component';
import AddUser from './components/AddUser.component';
import Navbar from './components/Navbar.component'

function App() {
  return (
    <div className="container">
    <Navbar/>
     <Route path = '/' exact component = {ExerciseList} />
     <Route path = '/add'  component = {CreateExercise} />
     <Route path = '/update/:id'  component = {UpdateExercise} />
     <Route path = '/delete/:id'  component = {DeleteExercise} />
     <Route path = '/users/add'  component = {AddUser} />
    </div>
  );
}

export default App;
