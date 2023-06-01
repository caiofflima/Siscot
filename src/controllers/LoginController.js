
const { Usuario } = require('../db');
const { compareSync } = require('bcryptjs');
const jwt = require('jsonwebtoken');

class LoginController {

    login(req, res){
        const { email, password } = req.body;
        Usuario.findOne({ where: {email} }).then(user => {
            if (!user) {
                return res.status(401).send({
                    success: false,
                    message: " Usuário não encontrado."
                })
            }

            if (!compareSync(password, user.password)) {
                return res.status(401).send({
                    success: false,
                    message: "Senha incorreta"
                })
            }
    
            const payload = {
                email: user.email,
                id: user.id
            }
    
            const token = jwt.sign(payload, "Random string", { expiresIn: "1d" })
    
            return res.status(200).send({
                success: true,
                message: "Logado com sucesso!",
                token: token
            })
        })
    }
   
    // protected(){
    //     passport.authenticate('jwt', { session: false }), (req, res) => {
    //         return res.status(200).send({
    //             success: true,
    //             user: {
    //                 id: req.user.id,
    //                 username: req.user.email,
    //             }
    //         })
    //     }
    // }
}

module.exports = new LoginController();