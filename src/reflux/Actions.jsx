var Reflux = require('reflux');

var Actions = Reflux.createActions([
  'getPokemon',
  'next',
  'surprise',
  'sortMe'
]);

module.exports = Actions;
