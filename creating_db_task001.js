var mysql = require("mysql");

var conn = mysql.createConnection({
	host: 		"localhost",
	user: 		"root",
	password: 	""
});

conn.connect(function(err){
	if (err) throw err;
	console.log("connected to the database");
	conn.query("CREATE DATABASE task001", function (err, result){
		if (err) throw err;
		console.log("Database task001 is successfully created. Enjoy!");
	});
});