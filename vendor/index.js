'use strict';
const Shipment = require('../Shipment');
const e = require('../event-pool');
const Chance = require('chance');
const chance = new Chance();

// Example event emission for pickup notification
setInterval(() => {
    const packageId = chance.string({length: 8});
    const payloadData = new Shipment("COSTCO");
    e.emit('pickupNotification', payloadData);
}, 3000);

e.on('delivered', e => {
    console.log("yey delievery")
})