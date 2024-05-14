const e = require('../event-pool');
const driver = require('./handler');;

e.on('driverAssigned', (packageId) => {
  console.log(`DRIVER INDEX : recievedForShipment by driver`);
  e.emit('inTransit')
  e.emit('delvered')
});


// Listen for events indicating package delivery by the driver
e.emit('packageDelivered', (packageId) => {
  console.log(`Package ${packageId} has been delivered`);
  // Perform any necessary actions in response to the package being delivered
});

