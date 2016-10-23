var five = require ('johnny-five');
var configs = five.Motor.SHIELD_CONFIGS.ARDUINO_MOTOR_SHIELD_R3_1;
var speedFwd = 220;
var speedRev = 220;

function MotorControl ( ) {
    this.MotorA = new five.Motor (configs.A);
    this.MotorB = new five.Motor (configs.B);
}

MotorControl.prototype.fwd = function ( ) {
    this.MotorA.forward (speedFwd);
    this.MotorB.forward (speedFwd);
}

MotorControl.prototype.rev = function ( ) {
    this.MotorA.reverse (speedRev);
    this.MotorB.reverse (speedRev);
}

MotorControl.prototype.stop = function ( ) {
    this.MotorA.stop ();
    this.MotorB.stop ();
}


module.exports = MotorControl;


