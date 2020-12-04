const net = require('net');//
const {setupInput} = require('./input');
/**
 * Establishes connection with the game server
 */
const { connect } = require('./client');

console.log('Connecting ...');
connect();
