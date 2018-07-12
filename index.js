var blinkstick = require('blinkstick');

var device = blinkstick.findFirst();

led.blink('random', function(){
    led.pulse('random', function(){
        led.setColor('red', function(){
        });
    });
});
