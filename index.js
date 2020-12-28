const express = require('express');
const connectDB = require('./config/db');

const app = express();
//connect database
connectDB();

//Init Middleware
app.use(express.json({ extended: true }));

//Define Routes
app.use('/api/students', require('./routes/api/students'));
app.use('/api/teachers', require('./routes/api/teachers'));
app.use('/api/auth_teacher', require('./routes/api/authTeacher'));
app.use('/api/auth_student', require('./routes/api/authStudent'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/assignment', require('./routes/api/assignment'));
app.use('/api/courses', require('./routes/api/courses'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server is up and running on port : ${PORT}`)
);
