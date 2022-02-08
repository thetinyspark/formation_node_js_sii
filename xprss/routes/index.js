const express         = require('express');
const router          = express.Router();
const userController  = require('../controller/users');
const diceController  = require('../controller/dice');
const homeController  = require('../controller/home');


router.get( '/'     , homeController.index    );
router.get( '/users', userController.getUsers );
router.get( '/dice' , diceController.roll     );
router.post( '/dice/limit' , diceController.changeLimit  );

module.exports = router;
