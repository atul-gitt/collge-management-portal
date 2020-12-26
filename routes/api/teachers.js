const express = require('express');
const router = express.Router();

//@route GET api/teachers
//@desc Test route
//@access Public

router.get('/', (req, res) => res.send('teachers route'));

module.exports = router;
