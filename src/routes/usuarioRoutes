const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router();

router.get('/', UsuarioController.index);
router.get('/:id', UsuarioController.show);
router.post('/', UsuarioController.store);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.delete);

module.exports = router;