const { Router } = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LoginController = require('../controllers/LoginController');

const router = Router();

router.post('/', LoginController.login);

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.status(200).send(req.user.profile);
});


module.exports = router;