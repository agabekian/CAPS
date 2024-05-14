'use strict';

const eventPool = require('../event-pool');
const Chance = require('chance');
const chance = new Chance();

// Example event emission for pickup notification
setInterval(() => {
    const packageId = chance.string({ length: 8 });
    eventPool.emit('pickupNotification', 'Vendor X', packageId);
}, 2000);