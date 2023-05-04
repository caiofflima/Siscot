const { Router } = require('express');
const AcompanhamentoController = require('../controllers/AcompanhamentoController');

const router = Router();

router.get('/', AcompanhamentoController.index);
router.get('/:id', AcompanhamentoController.show);
router.post('/', AcompanhamentoController.store);
router.put('/:id', AcompanhamentoController.update);
router.delete('/:id', AcompanhamentoController.delete);

module.exports = router;
