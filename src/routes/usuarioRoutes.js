const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const roleCheckMiddleware = require('../middlewares/roleCheck');

const router = Router();

router.use(roleCheckMiddleware(['ADMIN', 'SECRETARIO', 'ASSISTENTE SOCIAL']));

router.get('/', UsuarioController.index);
router.get('/:id', UsuarioController.show);
router.post('/', UsuarioController.store);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.delete);

module.exports = router;