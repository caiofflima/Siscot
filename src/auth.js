const UsuarioService = require('../src/services/UsuarioService');
const usuarioService = new UsuarioService();

module.exports = async function(passport){
    
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await usuarioService.findById(id);
        } catch (error) {
            return done(error, null);
        }
    });
}