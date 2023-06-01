const { Router } = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LoginController = require('../controllers/LoginController');

const router = Router();
require('../config/passport');

router.post('/', LoginController.login);

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
     return res.status(200).send({
        success: true,
        user: {
            id: req.user.id,
            email: req.user.email,
        }
     })
});


module.exports = router;