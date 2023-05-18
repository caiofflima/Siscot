const { Router } = require('express');
const HistoricoController = require('../controllers/HistoricoController');

const router = Router();

router.get('/', HistoricoController.index);
router.get('/:id', HistoricoController.show);
router.post('/', HistoricoController.store);
router.put('/:id', HistoricoController.update);
router.delete('/:id', HistoricoController.delete);

module.exports = router;
