const {Router} = require ('express');
const router = Router();
const toDoController = require('../controllers/toDoController'); // imported from toDoController.js

router.get('/', toDoController.getIndex);
router.get('/todo', toDoController.getToDo);
router.post('/todo', toDoController.postToDo);

module.exports = router;