const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// routers
const userRouter = require('./routes/user');
const exerciseRouter = require('./routes/exercise');

app.use('/users', userRouter)
app.use('/exercises', exerciseRouter)


// Connection to DB
require('./DBconnection/connection');

//Listing to port
const port = process.env.port || 5000;
app.listen(port, ()  => console.log(`listening to port ${port}` ) );


