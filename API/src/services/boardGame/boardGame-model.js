'use strict';

// boardGame-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardGameSchema = new Schema({
  gameId: { type: String, required: true, unique: true },
  title: { type: String, required: false },
  description: { type: String, required: false },
  image: {type:String, required: false},
  thumbnail: {type:String, required: false},
  min_players: { type: Number, required: false },
  max_players: { type: Number, required: false },
  rating: { type: Number, required: false },
  isExpansion: { type: Boolean, required: false },
  expansions: {type: Array, required: false},
  instructions: { type: String, required: false },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const boardGameModel = mongoose.model('boardGame', boardGameSchema);

module.exports = boardGameModel;