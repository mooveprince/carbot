var five = require ('johnny-five');
var keypress = require("keypress");
var MotorControl = require ('./motorctrl.js');

// set up the input
keypress(process.stdin);

process.stdin.resume(); 
process.stdin.setEncoding('utf8'); 
process.stdin.setRawMode(true); 

console.log ("Attempt to connect to the board");
var board = new five.Board ({
    port: '/dev/cu.IRobot-DevB'
});

board.on ('ready', function () {
    var motorControl = new MotorControl ( );

    process.stdin.on('keypress', function(chunk, key) {
        console.log ("You Pressed " + key.name); 
        if (key.name === "s") {
            console.log ("STOP the bot");
            motorControl.stop ( ) ;
        }
        if (key.name === "r") {
            console.log ("Move the bot Reverse");
            motorControl.rev ( ) ;
        }
        if (key.name === "f") {
            console.log ("Move the bot FWD");
            motorControl.fwd();
        }
    });

    console.log ("Setting the Proximity");
    //Ultrasonic Reader
/*    var proximity = new five.Proximity ({
        controller: 'HCSR04',
        pin: 7
    });

    //Ultrasonic change handler
    proximity.on('change', function () {
        //console.log ('proximity check');
        proximity.on ('data', function () {
            if (this.cm <= 10 ) {
                console.log ('this.data' + this.cm);
                motorControl.stop ( ) ;
            }
        });
    }); */

     board.repl.inject ({
         bot : motorControl
     });

    console.log ("BOT IS READY");    

});

