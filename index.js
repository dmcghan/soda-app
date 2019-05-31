const webServerUtil = require('./util/web-server.js');
const databaseUtil = require('./util/database.js');
const databaseConfig = require('./config/database.js');
const defaultThreadPoolSize = 4;
const oracledb = require('oracledb');

// Increase thread pool size by poolMax
process.env.UV_THREADPOOL_SIZE = databaseConfig.todoPool.poolMax + defaultThreadPoolSize;

async function startup() {
  console.log('Starting application');

  try {
    console.log('Initializing database module');

    await databaseUtil.initialize();
  } catch (err) {
    console.error(err);

    process.exit(1); // Non-zero failure code
  }

  try {
    console.log('Initializing web server module');

    await webServerUtil.initialize();
  } catch (err) {
    console.error(err);

    process.exit(1); // Non-zero failure code
  }
}

startup();

async function shutdown(e) {
  let err = e;

  console.log('Shutting down application');

  try {
    console.log('Closing web server module');

    await webServerUtil.close();
  } catch (e) {
    console.error(e);

    err = err || e;
  }

  try {
    console.log('Closing database module');

    await databaseUtil.close();
  } catch (e) {
    console.error(e);

    err = err || e;
  }

  console.log('Exiting process');

  if (err) {
    process.exit(1); // Non-zero failure code
  } else {
    process.exit(0);
  }
}

process.on('SIGTERM', () => {
  console.log('Received SIGTERM');

  shutdown();
});

process.on('SIGINT', () => {
  console.log('Received SIGINT');

  shutdown();
});

process.on('uncaughtException', err => {
  console.log('Uncaught exception');
  console.error(err);

  shutdown(err);
});
