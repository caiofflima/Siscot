const { text } = require('body-parser');
const { Usuario } = require('../db');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
const passport = require('passport');
const { error } = require('console');

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
    // Usuario.findOne({ where: { id: jwt_payload.id  }}, function (err, user) {
    //     if (err) {
    //         return done(err, false);
    //     }
    //     if (user) {
    //         return done(null, user);
    //     } else {
    //         return done(null, false);
    //         // or you could create a new account
    //     }
    // });
    
    await Usuario.findOne({ where: { id: jwt_payload.id}}).then((user, error ) => {
        
        if (error) return done(error, false);
        if (user) return done(null, user);
        else return  done(error, false);        
    });
    
}));