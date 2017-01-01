'use strict';

const assert = require('assert');
const bgg = require('../../../../src/services/boardGame/hooks/bgg.js');

describe('boardGame bgg hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    bgg()(mockHook);

    assert.ok(mockHook.bgg);
  });
});
