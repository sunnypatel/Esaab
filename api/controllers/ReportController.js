/**
 * ReportController
 *
 * @description :: Server-side logic for managing Reports
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	newReport : function(req, res){
		var daysOfWeek = new Array( "Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" );

		var now = new Date();
		Report.create({
			name: daysOfWeek[now.getDay()] + " - " + now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear(),
			date: now
		}).exec(function createCB(err, created){
			console.log('Created new report' + created);
			res.send(200, created);
		});
	},

	list : function(req, res){
		res.send(200,'testsefasdf');
		//return res.view();
	}

};

