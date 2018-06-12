var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController'); /*here*/

/* GET users listing. */
router.get('/', usersController.usersList);
router.get('/:id', usersController.getUser); /*here*/
router.post('/', usersController.newUser);

module.exports = router;
