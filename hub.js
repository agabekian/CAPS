'use strict';

const eventPool = require('./event-pool');
console.log("ccccc")
// Listen for pickup notifications from vendor
eventPool.on('pickupNotification', (vendor, packageId) => {
    console.log(`Received pickup notification from ${vendor} for package ${packageId}`);
    // Emit the 'pickupAssigned' event to trigger driver assignment
    eventPool.emit('pickupAssigned', 'Driver X', packageId);
});

// Define a handler for the 'pickupAssigned' event
eventPool.on('pickupAssigned', (driver, packageId) => {
    console.log(`Assigned pickup to ${driver} for package ${packageId}`);
    // Emit the 'drive' event to trigger the driver action
    eventPool.emit('drive', driver, packageId);
});