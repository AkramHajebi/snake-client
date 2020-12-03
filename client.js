const net = require('net');
const { setTimeout } = require('timers');

const connect = function() {

  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  


  // assign a random name for client = conn
  let clientName = Math.random().toString(36).substring(3);
  let movements = ["Move: up", "Move: down", "Move: left", "Move: right"];

  // interpret incoming data as text
  conn.setEncoding('utf8');

  // handeling data from server
  // conn.on('data', (data) => {  // conn is client
  //   console.log(data);
  
  // });

  conn.on('connect', () => {  // conn is client  
    
    let time = 0;
    // send server to do movements
    for (const move of movements) {
      
      setTimeout( () => {
        conn.write(move);
        console.log(move);
      }, time);  
      
      time += 50;
      
    }; 

    console.log("Successfully connected to game server");
    conn.write(`Name: ${clientName}`);
    

   }); 

   
  return conn;

 
};

module.exports = {connect};

