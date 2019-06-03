const todosDb = require('../db_apis/todos.js');

async function get(req, res, next) {
  try {
    const context = {};

    context.id = req.params.id;

    const rows = await todosDb.find(context);

    if (req.params.id) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}

module.exports.get = get;

function getTodoFromRec(req) {
  const todo = {
    title: req.body.title,
    completed: req.body.completed
  };

  return todo;
}

async function post(req, res, next) {
  try {
    let todo = getTodoFromRec(req);

    todo = await todosDb.create(todo);

    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
}

module.exports.post = post;

async function put(req, res, next) {
  try {
    let todo = getTodoFromRec(req);

    todo.id = req.params.id;

    todo = await todosDb.update(todo);

    if (todo !== null) {
      res.status(200).json(todo);
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}

module.exports.put = put;

async function del(req, res, next) {
  try {
    const id = req.params.id;

    const success = await todosDb.delete(id);

    if (success) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    next(err);
  }
}

module.exports.delete = del;