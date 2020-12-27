const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const Student = require('../../modals/Student');

//@route GET api/students
//@desc Register Student
//@access Public

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    check('semester', 'Current semester is required').not().isEmpty(),
    check('session', 'Session is required').not().isEmpty(),
    check('rollNum', 'Correct Roll Number is required').isLength({ min: 6 }),
    check('department', 'Department is required').not().isEmpty(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400), json({ error: error.array() });
    }
    const {
      name,
      email,
      password,
      semester,
      session,
      rollNum,
      department,
    } = req.body;
    try {
      //see if student already exists
      let student = await Student.findOne({ email });
      if (student) {
        return res
          .status(400)
          .json({ error: [{ msg: 'Student already exists' }] });
      }
      student = new Student({
        name,
        email,
        password,
        semester,
        session,
        rollNum,
        department,
      });

      await student.save();

      //Return jsonwebtoken
      const payload = {
        user: {
          id: student.id,
        },
      };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
