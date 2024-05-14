const e = require('./event-pool');
const vendor = require('./vendor/index');
const driver = require('./driver/index');
const {inTransit} = require("./driver/driver");

class Package {
    constructor(event, time, payload) {
        this.event = event;
        this.time = time;
        this.payload = payload;
    }
}

e.on('pickupNotification', handlePickupNotification);

function handlePickupNotification(payload){
    console.log(`Received pickup notification from for package`);
    console.log("triggering driver")
    e.emit('driverAssigned')
}

e.on('inTransit',inTransit);

e.on('delivered',()=>{
    console.log("HUB RECEIVED FROM DRIVER: delivered")
    e.emit('delivered');//to VENDOR
})


//

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
