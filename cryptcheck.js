"use strict";

var CRYPTO      = require('crypto');
var moment = require('moment');
var secretKey = "secretKey"

var msg = {
	head: {
		clientId: 'IN',
		version: 'v1',
		requestTimeStamp: '1519736590323',
		channelId: 'APP',
		signature: ''
	},
	body: {
		uniqueId: '1231000000000000',
		eligRequestId: '567',
		cardToken: '201801160055125e54854bc92be8e49f8ae3b040f9124',
		entityName: 'VISA'
	}

}


// var msg2 = {
// 	"head": {
// 		"clientId": "IN",
// 		"version": "v1",
// 		"requestTimeStamp": "1520419311437",
// 		"channelId": "APP",
// 		"signature": "0856d5a787707d665fae28342ae2b01c02ce65b69a58cbbce9641ae3e0d84b7a"
// 	},
// 	"body": {
// 		"uniqueId": "86616115143",
// 		"eligRequestId": "115143",
// 		"cardToken": "809c5535d3584951945cacedd3910c151517813918080",
// 		"entityName": "VISA"
// 	}

// }

var crypto = {
    encrypt : function(msg,keys) {
        var hashed      = CRYPTO.createHash('sha256').update(msg).digest('hex');
        return hashed;
    }
};
module.exports = crypto;


(function () {
    if (require.main == module) {
    	var c = '10100010101125123456200';
        var a = crypto.encrypt(c);
        console.log('Hash generated: '+a);
        console.log('C is : '+ c);
        var ms = msg.body.uniqueId + msg.body.eligRequestId + msg.body.cardToken + msg.body.entityName + secretKey;
        var m = crypto.encrypt(ms);
        console.log('message :'+ ms);
        console.log('M is : '+ m);
        console.log(moment().format('YY')%10 + moment().format('DDDHHmmssSS'));

    }
}());


