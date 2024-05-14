const eventEmitter = require('../event-pool');
const vendor = require('./vendor');
const Chance = require('chance');
const chance = new Chance();



// Example event emission for pickup notification
setInterval(() => {
    const packageId = chance.string({ min: 8, max: 100 });
 // Implement your logic to generate package ID
    eventEmitter.emit('pickupNotification', vendor, packageId);
}, 1000);

// function generatePackageId() {
//     // Implement logic to generate package ID
//     return Math.random().toString(36).substring(7);
// }

module.exports = eventEmitter;