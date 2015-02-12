/**
* Game.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    store: {
        model: 'Store'
    },
  	name:{
  		type: 'string'
  	},
  	price: {
  		type: 'float'
  	},
  	packSize: {
  		type: 'integer'
  	},
  	lottoGameId: {
  		type: 'integer'
  	},
  	packs: {
  		collection: 'Pack',
  		via: 'game'
  	}
  }
};
