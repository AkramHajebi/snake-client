/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);   // If true, configures the tty.ReadStream to operate as a raw device. 
  stdin.setEncoding('utf8');
  stdin.resume();   //Standard input streams are paused by default, so call process.stdin.resume() to resume receiving.
  return stdin;
}


module.exports = {setupInput};