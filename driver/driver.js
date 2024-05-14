const eventPool = require('../event-pool');
const e = require("../event-pool");

function inTransit(){
  console.log("SHIP TO SHORE ya its in transit");
}
function delivered(){
  console.log("TO HUB FROM DRIVER ALL DONE");
}

module.exports = {
  inTransit
}