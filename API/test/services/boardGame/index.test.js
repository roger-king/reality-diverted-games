'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('boardGame service', function() {
  it('registered the boardGames service', () => {
    assert.ok(app.service('boardGames'));
  });
});
