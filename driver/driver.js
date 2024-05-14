'use strict';

const driverE = require('../event-pool.js');

// Register the handlers and start listening for events
// events.on('light', goosebumps);
// events.on('light', coverFace);
//
// function goosebumps(payload) {
//   console.log('Goosebumps');
// }
//
// function coverFace(payload) {
//   if(payload.brightness > 65) {
//     console.log('Arms Cover Face');
//   }
// }

// Event handler functions for drivers
function pickupAcknowledgmentHandler (driver, packageId){
  console.log(`Driver ${driver} picked up package (ID: ${packageId}) 
  and it is in transit`);
}

const deliveryAcknowledgmentHandler = (driver, packageId) => {
  console.log(`Driver ${driver} delivered package (ID: ${packageId})`);
  driverE.emit('deliveryComplete', packageId); // Notify system about package delivery
};

// Listen for events related to drivers


module.exports = {
  pickupAcknowledgmentHandler
};