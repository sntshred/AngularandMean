var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool	= mysql.createPool({
    connectionLimit : 5, //important
    host     : '127.0.0.1',
    user     : 'root',
    password : 'root',
    database : 'student',
    debug    :  false
});

router.get("/", function(req, res, next){
	res.json({'message' : 'i m fine'});
});

/* GET items listing. */
/*router.get('/getItems', function(req, res, next) {
	pool.getConnection(function(err, connection){
		if (err) {
			console.log(err);
			connection.release();
			res.json({"code" : 100, "status" : "Error in connection database"});
			return;
		}
		console.log('connected as id ' + connection.threadId);
		connection.query("select * from wine",function(err, rows){
			connection.release();
			if(!err) {
				res.json(rows);
			}
		});
	});
});*/

/* INSERT new STUDENT. */
router.post('/insertStudent', function(req, res, next) {
	var response = {};
	pool.getConnection(function(err, connection){
		if (err) {
			console.log(err);
			//connection.release();
			res.json({"code" : 501, "status" : "Error in connection database"});
			return;
		}
		console.log('connected as id ' + connection.threadId);
		var str ="insert into student_details set ?";
		console.log(str);
		connection.query(str, req.body, function(err,result){
			//connection.release();
			console.log(result);
			if(!err) {
				console.log("insertion successfull");
				connection.query("select * from student_details",function(err, rows){
					connection.release();
					console.log(rows);
					if(!err) {
						res.json(rows);
						return;
					}
					res.json([]);
				});				
			}
			else{
				console.log(err);
				res.json({'error' : 'some problem at server'});
			}
		});
	});
});

module.exports = router;
