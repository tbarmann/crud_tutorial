const knex = require('knex');

describe('CRUD Stickers', () => {
  before( (done) => {
    // run migrations
    knex.migrate.latest()
      .then(() => {
        // run seeds
        return knex.seed.run();
      })
      .then(() => done());
  });

  it('Works ...', () => {
    console.log('its working');
  });


});
