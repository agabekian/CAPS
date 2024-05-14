const e = require('./vendor/index');

// Listen for pickup notifications from vendor
class Package {
    constructor(event, time, payload) {
        this.event = event;
        this.time = time;
        this.payload = payload;
    }
}

e.on('pickupNotification', (vendor, packageId) => {
    console.log(`Received pickup notification from ${vendor} for package ${packageId}`);

});

function handlePickupNotification(payload){
    console.log(`Received 
    pickup notification from for package`);
}


// const e = require('./event-pool.js');
// const driver = require('./driver/driver.js');
// const vendor = require('./vendor/vendor');
//
// console.log("HUB IS RUNNING")

//
// e.on('pickupNotification', pickupNotificationHandler)
//
// function pickupNotificationHandler(vendor, packageId){
//     console.log(`Vendor ${vendor} has a package to be picked up (ID: ${packageId})`);
// }
//
// function logEvent(event, payload) {
//     const currentTime = new Date().toISOString();
//     console.log(
//         `EVENT: {
//             event: ${event},
//             time: ${currentTime},
//             payload: ${JSON.stringify(payload, null, 2)}
//         }`
//     )
// }
//
//
// // e.on('deliveryComplete', (payload) => {
// //     console.log("DDDD")
// // });
//
//
//
//
// // eventEmitter.emit('deliveryNotification', 'Driver X', '12345');
// // eventEmitter.emit('pickupAcknowledgment', 'Driver X', '12345');
// // eventEmitter.emit('logEvent', 'Driver X', '12345');
