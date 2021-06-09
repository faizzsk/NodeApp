// get the reference of EventEmitter class of events module
var events = require('events');

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();

//Subscribe for FirstEvent
em.on('FirstEvent', function (data,data1) {
    console.log('First subscriber: ' + data+ " "+data1);
});

// Raising FirstEvent
em.emit('FirstEvent', 'This is my first Node.js event emitter example.'," Another data");