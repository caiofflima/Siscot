const { Router } = require('express');
const AgendaController = require('../controllers/AgendaController');

const router = Router();

router.get('/', AgendaController.index);
router.get('/:id', AgendaController.show);
router.post('/', AgendaController.store);
router.put('/:id', AgendaController.update);
router.delete('/:id', AgendaController.delete);

module.exports = router;
