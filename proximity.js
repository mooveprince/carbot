var five = require ('johnny-five');
var MotorControl = require ('./motorctrl.js');

function Proximity (motorControl) {
    //Ultrasonic Reader
    var proximity = new five.Proximity ({
        controller: 'HCSR04',
        pin: 7
    });  

    //Ultrasonic change handler
    proximity.on('change', function () {
        proximity.on ('data', function () {
            if (this.cm <= 10 ) {
                motorControl.stop ( ) ;
            }
        });
    }); 
}

module.exports = Proximity;