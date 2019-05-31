const express = require('express');
const router = new express.Router();
const todosCtrl = require('../controllers/todos.js');

router.route('/todos/:id?')
  .get(todosCtrl.get)
  .post(todosCtrl.post)
  .put(todosCtrl.put)
  .delete(todosCtrl.delete);

module.exports = router;