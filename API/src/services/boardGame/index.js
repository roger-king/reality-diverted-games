'use strict';

const debug = require('debug');
const service = require('feathers-mongoose');
const boardGame = require('./boardGame-model');
const request = require('request');
const hooks = require('./hooks');

class Service {
  constructor(options) {
    this.options = options || {
        Model: boardGame,
        paginate: {
          default: 5,
          max: 25
        }
      };
  }

  find() {
    boardGame.find({}, function(err, games){
      if(err) return Promise.reject(err);
      return Promise.resolve(games);
    })
  }

  get(id, params) {
    debug("I want this game: ", id);
    boardGame.find({gameId: id}, function (err, game) {
      if(err) return Promise.reject(err);
      return Promise.resolve(game);
    })
  }


  create(data) {
    debug('Are we in create', data);
    var options = {
      method: 'GET',
      url: 'https://bgg-json.azurewebsites.net/thing/' + data.gameId,
      headers: {
        'cache-control': 'no-cache'
      }
    };

    debug('before request');
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      const game = JSON.parse(body);

      if (game.gameId) {
        debug('Valid game id.');
        const boardgame = new boardGame({
          gameId: game.gameId,
          title: game.name,
          description: game.description,
          image: game.image,
          thumbnail: game.thumbnail,
          min_players: game.minPlayers,
          max_players: game.maxPlayers,
          rating: game.bggRating,
          isExpansion: game.isExpansion
        });
        debug('Why wont we return the new game: ', boardgame);
        boardgame.save(function (err, game) {
          debug('Are we saving?!');
          if (err) return err;
          debug("Saving object: ", game);
          return Promise.resolve(game);
        })
      } else {
        return Promise.reject({"code": "BG001", "err": true, "msg": "Invalid Game ID."});
      }

      // if bgg-json ever goes down use:
      // url: 'https://www.boardgamegeek.com/xmlapi2/thing?id=' + hook.data.gameId
      // must transform xml to json: parser.toJson(xml, {object: true})
    });
  }
}

module.exports = function () {
  const app = this;

  const options = {
    Model: boardGame,
    paginate: {
      default: 25,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  // TODO: fix service
  app.use('/api/boardgames', service(options));

  // Get our initialize service to that we can bind hooks
  const boardGameService = app.service('/api/boardgames');

  // Set up our before hooks
  boardGameService.before(hooks.before);

  // Set up our after hooks
  boardGameService.after(hooks.after);
};
