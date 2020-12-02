const net = require('net');


const connect = function() {

  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.on("data", (data) => console.log('haha'));


  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {  // conn is client
    console.log(data);
    console.log("Successfully connected to game server");
    console.log('Name: Ah');
    //return data
  }); 
  
  // conn.on('connection', () => {  // any string
  // console.log('how are you?');
    
 //});


  //conn.write(action());

  return conn;
};

module.exports = {connect};

