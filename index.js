var five = require ('johnny-five');
var keypress = require("keypress");
var MotorControl = require ('./motorctrl.js');
var Proximity = require ('./proximity.js');
var PubNubHandler = require ('./pubnubhandler.js'); 
var KeyStroke = require ('./keystroke.js');

var board = new five.Board ({ });

board.on ('ready', function () {
    console.log ("BOT IS READY");

    var motorControl = new MotorControl ( );

    new Proximity (motorControl);
    new PubNubHandler (motorControl);
    new KeyStroke (motorControl);
});

