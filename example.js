var osc = require('node-osc'),
    parser = require('./');

var server = new osc.Server(12345,'127.0.0.1');
server.on('message',function(msg,info){
    console.log(parser(msg)); 
});
