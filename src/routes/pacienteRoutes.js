const { Router } = require('express');
const PacienteController = require('../controllers/PacienteController');
const roleCheckMiddleware = require('../middlewares/roleCheck');

const router = Router();

//router.use(roleCheckMiddleware(['ADMIN', 'SECRETARIO', 'ASSISTENTE SOCIAL']));

router.get('/', PacienteController.index);
router.get('/:id', PacienteController.show);
router.post('/', PacienteController.store);
router.put('/:id', PacienteController.update);
router.delete('/:id', PacienteController.delete);

module.exports = router;
