const net = require('net');


const connect = function() {

  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // handeling data from server
  conn.on('data', (data) => {  // conn is client
    console.log(data);
  
  });

  return conn;

  // conn.on('connect', () => {  // conn is client
    
  //   console.log("Successfully connected to game server");
  //   conn.write('Name: Ah');
    
  // }); 

  //  conn.on('connect',()=>{ 
  //    setTimeout(function(){ conn.write("Move: up");}, 50);
  //  });
    
    
  //return conn;
};

module.exports = {connect};

