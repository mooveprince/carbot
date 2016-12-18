var keypress = require("keypress");
var MotorControl = require ('./motorctrl.js');

function KeyStroke (motorControl) {

    keypress(process.stdin);
    process.stdin.resume(); 
    process.stdin.setEncoding('utf8'); 
    process.stdin.setRawMode(true);

    process.stdin.on('keypress', function(chunk, key) {
        console.log ("You Pressed " + key.name); 
        if (key.name === "escape" || key.name === "s") {
            console.log ("STOP the bot");
            motorControl.stop ( ) ;
        }
        if (key.name === "r" || key.name === "down") {
            console.log ("Move the bot Reverse");
            motorControl.rev ( ) ;
        }
        if (key.name === "f" || key.name === "up") {
            console.log ("Move the bot FWD");
            motorControl.fwd();
        }
    });     

}

module.exports = KeyStroke;