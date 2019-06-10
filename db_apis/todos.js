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

async function create(todo) {
  let conn;

  try {
    conn = await oracledb.getConnection();

    // *** Add SODA call(s) to add todo to collection, then return its key ***
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

async function update(key, todo) {
  let conn;

  try {
    conn = await oracledb.getConnection();

    // *** Add SODA call(s) to update todo, then return true/false for success ***
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

async function del(key) {
  let conn;

  try {
    conn = await oracledb.getConnection();

    const collection = await soda.openCollection('todos');

    let result;

    if (key) {
      // *** Use 'todos' collection to remove a single todo ***
      // result = [api call here]
    } else {
      // *** Use 'todos' collection to remove completed todos ***
      // result = [api call here]
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