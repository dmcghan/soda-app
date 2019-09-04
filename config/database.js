module.exports = {
  todoPool: {
    user: 'todo_soda',
    password: 'SecretPassw0rd',
    connectString: 'tododb_tp', // service name in /db_credentials/tnsnames.ora
    poolMin: 2,
    poolMax: 2,
    poolIncrement: 0
  }
};
