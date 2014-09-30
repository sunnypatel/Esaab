/**
* Game.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name:{
  		type: 'string'
  	},
  	price: {
  		type: 'integer'
  	},
  	pack_size: {
  		type: 'integer'
  	},
  	lotto_serial: {
  		type: 'integer'
  	},
  	reports: {
  		collection: 'Report',
  		via: 'games'
  	},
  	records: {
  		collection: 'Record',
  		via: 'game'
  	}
  }
};

