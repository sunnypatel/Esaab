/**
 * ReportController
 *
 * @description :: Server-side logic for managing Reports
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	new : function(req, res){
		var reports = Report.find();
		reports.sort('updatedAt DESC');
		reports.limit(1);
		reports.exec(function cb(err, prevReport){
			if (err) {
				console.log("Error creating new report");
				res.send(500);
			} else {
				console.log(results);
				var now = new Date();
				Report.create({
					name: daysOfWeek[now.getDay()] + " - " + now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear(),
					previousReportId: prevReport.id
				}).exec(function createCB(err, created){
					prevReport.records.forEach(function cb(currentRecord, index, records){
						
					})
					console.log('Created new report' + created);
					res.send(200, created);
				});
				res.send(200, results);
			}
		});
	},

	list : function(req, res){
		res.send(200,'testsefasdf');
		//return res.view();
	}

};
