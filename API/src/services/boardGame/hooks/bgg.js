'use strict';

// src/services/boardGame/hooks/bgg.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const debug = require('debug')('BGG HOOK: ');
const request = require('request');
const parser = require('xml2json');
const defaults = {};

module.exports = function (options) {
  options = Object.assign({}, defaults, options);

  return function (hook) {
    return new Promise(function (resolve, reject) {
      hook.bgg = true;
      debug('CREATING GAME: ', hook.data);
      var options = {
        method: 'GET',
        url: 'https://bgg-json.azurewebsites.net/thing/' + hook.data.gameId,
        headers: {
          'cache-control': 'no-cache'
        }
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        const game = JSON.parse(body);
        // TODO: Do some error handling for if the results comes back null
        if (game.gameId) {
          hook.data = {
            gameId: game.gameId,
            title: game.name,
            description: game.description,
            image: game.image,
            thumbnail: game.thumbnail,
            min_players: game.minPlayers,
            max_players: game.maxPlayers,
            rating: game.bggRating,
            isExpansion: game.isExpansion
          };
          debug('New Game: ', hook.data);

          resolve(hook.data);
        } else {
        }

        // if bgg-json ever goes down use:
        // url: 'https://www.boardgamegeek.com/xmlapi2/thing?id=' + hook.data.gameId
        // must transform xml to json: parser.toJson(xml, {object: true})
      });
    });
  };
}
;
