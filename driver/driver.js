const eventPool = require('../event-pool');
const e = require("../event-pool");

function driverPickedUp(id) {
    console.log("DRIVER: picked up", id);
}

function delivered(id) {
    console.log("delivered up", id);
}
module.exports = {
    driverPickedUp,
    delivered
}
