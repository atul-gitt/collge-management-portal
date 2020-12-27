const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const Teacher = require('../../modals/Teacher');

//@route GET api/teachers
//@desc Register Teacher
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
    check('rank', 'Rank is required').not().isEmpty(),
    check('department', 'Department is required').not().isEmpty(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400), json({ error: error.array() });
    }
    const { name, email, password, rank, department } = req.body;
    try {
      //see if teacher already exists
      let teacher = await Teacher.findOne({ email });
      if (teacher) {
        return res
          .status(400)
          .json({ error: [{ msg: 'Teacher already exists' }] });
      }
      teacher = new Teacher({
        name,
        email,
        password,
        rank,
        department,
      });

      await teacher.save();

      //Return jsonwebtoken
      const payload = {
        user: {
          id: teacher.id,
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
