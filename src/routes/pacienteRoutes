const { Router } = require('express');
const PacienteController = require('../controllers/PacienteController');

const router = Router();

router.get('/', PacienteController.index);
router.get('/:id', PacienteController.show);
router.post('/', PacienteController.store);
router.put('/:id', PacienteController.update);
router.delete('/:id', PacienteController.delete);

module.exports = router;
