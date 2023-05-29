const { Router } = require('express');
const AgendaController = require('../controllers/AgendaController');
const roleCheckMiddleware = require('../middlewares/roleCheck');

const router = Router();

router.use(roleCheckMiddleware(['ADMIN', 'SECRETARIO', 'ASSISTENTE SOCIAL']));

router.get('/', AgendaController.index);
router.get('/:id', AgendaController.show);
router.post('/', AgendaController.store);
router.put('/:id', AgendaController.update);
router.delete('/:id', AgendaController.delete);

module.exports = router;
