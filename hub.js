const e = require('./event-pool');
const vendor = require('./vendor/index');
const driver = require('./driver/index');

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

e.on('pickupNotification', (payload) => {
    logEvent('pickupNotification', payload)
    e.emit('driverAssigned', payload) //id only
});

e.on('inTransit', (payload) =>
    logEvent('inTransit', payload));


//is below OK ? should it come from driver?
e.on('delivered', (payload) => {
    console.log("DRIVER: delivered up", payload)
    e.emit('notifyVendorOK', payload); // inform the VENDOR packaged delivered.
})

