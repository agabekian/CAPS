'use strict';

const events = require('./event-pool.js');

const arms = require('./body/arms.js');
const eyes = require('./body/eyes');

events.on('light-detected', handleLight);

function handleLight(lightObject) {

    events.emit('light', lightObject);

}
