const eventPool = require('./event-pool');

// Listen to all events in the global event pool
function logAllEvents() {
    eventPool.on('newListener', (eventName, listener) => {
        // Ignore the 'newListener' event itself to prevent infinite loop
        if (eventName !== 'newListener') {
            console.log(`[${new Date().toISOString()}] Event: ${eventName}`);
        }
    });
}

logAllEvents();

// Exporting the event pool itself in case other modules need to listen to specific events directly
module.exports = eventPool;