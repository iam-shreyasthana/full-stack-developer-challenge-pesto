const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/add', taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/:taskId', taskController.getTaskById);
router.post('/update/:taskId', taskController.updateTask);
router.post('/delete/:taskId', taskController.deleteTask);

module.exports = router;
