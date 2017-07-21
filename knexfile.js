// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'webstore',
      user:     'webstore',
      password: 'Password1'
    }
  },
  test: {
    client: 'pg',
    connection: {
      database: 'test-webstore',
      user:     'webstore',
      password: 'Password1'
    }
  }
};
