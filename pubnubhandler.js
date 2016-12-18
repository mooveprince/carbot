var PubNub = require('pubnub');
var MotorControl = require ('./motorctrl.js');

function PubNubHandler (motorControl) {
    var pubnub = PubNub.init({
        subscribe_key: 'sub-c-02c147da-aeba-11e6-8319-02ee2ddab7fe',
        publish_key:   'pub-c-30d8d010-04ed-469e-8e62-d6bec3830020'
    });

    pubnub.subscribe({
        channel: 'robo-car',
        callback: function (m) {
            console.log (m.direction);
            switch (m.direction.toUpperCase()) {
                case 'REV': 
                    motorControl.rev ( ) ;
                    break;
                case 'FWD':
                    motorControl.fwd ( );
                    break;
                case 'STOP':
                    motorControl.stop ( );
                    break;
            }
        }
    });
}

module.exports = PubNubHandler;