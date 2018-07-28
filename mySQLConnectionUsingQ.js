
var mysql = require('mysql');
var  Q = require('q');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "task001"
});

var sum = 12;

var readline = require('readline-sync');

var user_id = readline.question("What is your name?");
console.log("User_id:     ",user_id);
var days = readline.question("No. of days?");
console.log("Days:    ",days);

Q(undefined)
  .then(function(){
    var d = Q.defer();
    con.connect(function(err){
       if(err) throw err;
        query = `SELECT product_id FROM TABLE1 WHERE user_id = ${user_id} AND created_at >=date_sub(now(), interval ${days} day)`,user_id, days;
        // console.log('1',query);
        // return query;
        d.resolve(query);
    });
    return d.promise;
  })
  .then(function(query){
    var d = Q.defer();
    con.query(query, function(err,result){
      if (err) throw err;
      // console.log(result);
      d.resolve(result);
    });
    return d.promise;
  })
  .then(function(result){

    var promises = []
    
    result.forEach(function(element){
      
              var d = Q.defer()
           
              // console.log("product id:  ", element.product_id);
              query2 = `SELECT price FROM TABLE2 WHERE product_id= '${element.product_id}'`,element.product_id;
              
              con.query(query2,function(err,result){
                      // console.log("PRICE:  ", result[0].price);
                      sum += result[0].price;
                      // console.log("SUM-----:   ",sum);
                      d.resolve(sum);
              });
          
              promises.push(d.promise)
    });
    return Q.all(promises)
  })
  .then(function(arr){
      // sum += 2;
      console.log("Query sum:   " + arr[arr.length-1]);
  })








  // .then(function(query){

  //   var d = Q.defer();

  //   // console.log("QUERY", query);
  //   con.query(query, function(err,result){


  //     if (err) throw err;
  //     // console.log("RESULT", result);

  //     result.forEach(function(element){

  //       console.log("product id: ", element.product_id);
  //       query2 = `SELECT price FROM TABLE2 WHERE product_id= '${element.product_id}'`,element.product_id;
  //       // console.log("Query:       ",query2);


  //       // querying each product
  //       con.query(query2, function(err, result2){

  //         console.log("Inside query2 connection     ");
  //         if (err) throw err;
  //         console.log("Result inside query2", result2[0].price);
  //         sum += result2[0]. price;
  //         console.log("Sum till now:  ", sum);


  //       });

  //     });
  //   d.resolve(sum);
  //   console.log("I think sum is:", sum);
  //   return d.promise;

  //   });
  // })
  // .then(function(sum){
  //     console.log(`SUM of ${user_id} is ${sum}`, user_id, sum);

  // })



// con.query(query, function(err,result){
//     if(err) throw err;
//     console.log("line 31");
//     console.log(result);
//   })
//   