const oracledb = require('oracledb');
const databaseConfig = require('../config/database.js');

async function initialize() {
  let conn;

  try {
    await oracledb.createPool(databaseConfig.todoPool);

    conn = await oracledb.getConnection();

    // *** Add SODA call(s) to create 'todos' collection ***
  } catch (err) {
    throw err;
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

module.exports.initialize = initialize;

async function close() {
  await oracledb.getPool().close();
}

module.exports.close = close;
