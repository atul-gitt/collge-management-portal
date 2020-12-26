const express = require('express');
const connectDB = require('./config/db');

const app = express();
//connect database
connectDB();
app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/students', require('./routes/api/students'));
app.use('/api/teachers', require('./routes/api/teachers'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/assignment', require('./routes/api/assignment'));
app.use('/api/courses', require('./routes/api/courses'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server is up and running on port : ${PORT}`)
);
