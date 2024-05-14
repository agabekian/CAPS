const e = require('./event-pool');
const vendor = require('./vendor/index');
const driver = require('./driver/index');
const {inTransit} = require("./driver/handler");

class Package {
    constructor(event, time, payload) {
        this.event = event;
        this.time = time;
        this.payload = payload;
    }
}

e.on('pickupNotification',payload => {
    console.log(`Received ${payload.store} from for package`);
    console.log("triggering driver")
    e.emit('driverAssigned')
    // logEvent(eventName)
});



e.on('inTransit',inTransit);

e.on('delivered',(payload)=>{
    logEvent(payload);
    e.emit('delivered');//to VENDOR
})


function logEvent(event, payload) {
    const currentTime = new Date().toISOString();
    console.log(
        `EVENT: {
            event: ${event},
            time: ${currentTime},
            payload: ${JSON.stringify(payload, null, 2)}
        }`
    )
}

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
