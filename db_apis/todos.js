const oracledb = require('oracledb');
const databaseUtil = require('../util/database.js');

async function find() {
  let conn;

  try {
    const todos = [];

    conn = await oracledb.getConnection();

    // *** Add SODA call(s) to fetch from the 'todos' collection ***

    return todos;
  } catch (err) {
    console.error(err);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

module.exports.find = find;

async function create(t) {
  let conn;

  try {
    // Prevent changes to param; copy 'todo' to new object
    todo = Object.assign({}, t);

    // *** Add SODA call(s) to create and return a todo ***

    return todo;
  } catch (err) {
    console.error(err);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

module.exports.create = create;

async function update(t) {
  let conn;

  try {
    // Prevent changes to param; copy 'todo' to new object
    const todo = Object.assign({}, t);

    conn = await oracledb.getConnection();

    // *** Add SODA call(s) to update and return a todo ***

    return todo;
  } catch (err) {
    console.error(err);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

module.exports.update = update;

async function del(id) {
  let conn;

  try {
    conn = await oracledb.getConnection();

    // *** Add SODA call(s) to get 'todos' collection ***

    let result;

    if (id) {
      // *** Use 'todos' collection to remove a single todo ***
    } else {
      // *** Use 'todos' collection to remove completed todos ***
    }

    return result.count >= 1;
  } catch (err) {
    console.error(err);
  } finally {
    if (conn) {
      try {
        await conn.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

module.exports.delete = del;