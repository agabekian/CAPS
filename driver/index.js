'use strict';

const hubEmitter = require('../event-pool.js');
// const pupil = require('./pupils.js');
// const eyelid = require('./eyelids.js');
const {pickupAcknowledgmentHandler,
  deliveryAcknowledgmentHandler,} = require("../driver/driver");

// Registers and listens
// events.on('light', eyelid);
// events.on('light', pupil);

e.on('pickupAcknowledgment', pickupAcknowledgmentHandler);
e.on('deliveryAcknowledgment', deliveryAcknowledgmentHandler);


// pretent we open our eyes and the eyes detect light - Event gets triggered

// setInterval( () => {
//   let brightness = Math.floor(Math.random() * 100);
//   console.log('----------------------');
//   console.log('Light Detected', brightness);
//   events.emit('light-detected', {brightness});
// }, 250)
