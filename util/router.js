const express = require('express');
const router = new express.Router();
const todosCtrl = require('../controllers/todos.js');

// This route is needed to prevent the todo app from using localStorage.
router.route('/')
  .get((req, res) => res.status(200).end());

router.route('/todos/:id?')
  .get(todosCtrl.get)
  .post(todosCtrl.post)
  .put(todosCtrl.put)
  .delete(todosCtrl.delete);

module.exports = router;