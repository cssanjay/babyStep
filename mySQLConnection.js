
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "task001"
});

var readline = require('readline-sync');

var user_id = readline.question("What is your name?");
console.log(user_id);
var days = readline.question("No. of days?");
console.log(days);

con.connect(function(err) {
  if (err) throw err;

  query = `SELECT product_id FROM TABLE1 WHERE user_id = ${user_id} AND created_at >=date_sub(now(), interval ${days} day)`,user_id, days;
  console.log(query);
  con.query(query, function (err, result) {
    if (err) throw err;
    console.log('------------------------------------------------------------');


    for(i =0; i<result.length; i++){
      	
      	query2 = `SELECT price FROM TABLE2 WHERE product_id= '${result[i].product_id}'`,result[i].product_id;
      	sum =0;

      	con.query(query2, function ( err, result2){
      		if(err) throw err;
      		sum += result2[0].price
      	});

    }
    console.log("SUM IS: ",sum);
    console.log('============================================================');
  });

});

