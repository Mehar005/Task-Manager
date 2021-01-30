const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MERNapp',{useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true});


mongoose.connection
.once('open', () => console.log('database connected'))
.on('error', (error) => console.log(error.message));
