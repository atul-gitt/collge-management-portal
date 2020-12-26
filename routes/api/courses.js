const express = require('express');
const router = express.Router();

//@route GET api/courses
//@desc Test route
//@access Public

router.get('/', (req, res) => res.send('courses route'));

module.exports = router;
