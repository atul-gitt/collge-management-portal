const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
  rollNum: {
    type: Number,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Student = mongoose.model('student', StudentSchema);
