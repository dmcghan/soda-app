module.exports = {
  todoPool: {
    user: 'todo_soda',
    password: 'SecretP@ssw0rd',
    connectString: '[SERVICE_NAME]', // service name in /db_credentials/tnsnames.ora
    poolMin: 4,
    poolMax: 4,
    poolIncrement: 0
  }
};