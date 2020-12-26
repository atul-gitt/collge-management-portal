const express = require('express');
const router = express.Router();

//@route GET api/assignment
//@desc Test route
//@access Public

router.get('/', (req, res) => res.send('Assingnment route'));

module.exports = router;
