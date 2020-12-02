const net = require('net');


const connect = function() {

  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {  // conn is client
    console.log(data);
    //return data
  });

  //conn.write(action());

  return conn;
};

module.exports = {connect};

