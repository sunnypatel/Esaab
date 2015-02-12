/**
* Record.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	pack: {
  		model: 'Pack'
  	},
  	report: {
  		model: 'Report'
  	},
  	startNumber: {
  		type: 'integer'
  	},
  	endNumber: {
  		type: 'integer'
  	},
  	totalSold: {
  		type: 'integer'
  	}
  }
};
