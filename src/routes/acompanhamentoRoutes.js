const { Router } = require('express');
const AcompanhamentoController = require('../controllers/AcompanhamentoController');
const roleCheckMiddleware = require('../middlewares/roleCheck');

const router = Router();

router.use(roleCheckMiddleware(['ADMIN', 'SECRETARIO', 'ASSISTENTE SOCIAL']));

router.get('/', AcompanhamentoController.index);
router.get('/:id', AcompanhamentoController.show);
router.post('/', AcompanhamentoController.store);
router.put('/:id', AcompanhamentoController.update);
router.delete('/:id', AcompanhamentoController.delete);

module.exports = router;
