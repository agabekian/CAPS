const eventPool = require('../event-pool');
const driver = require('./driver');

// Listen for pickupAssigned events
eventPool.on('pickupAssigned', (driver, packageId) => {
  console.log(`Assigned pickup to ${driver} for package ${packageId}`);
  // Perform any actions in response to the pickup assignment
});