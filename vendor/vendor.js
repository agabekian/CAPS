
const pickupNotificationHandler = (vendor, orderId) => {
    console.log(`Vendor ${vendor} has a package to be picked up (ID: ${orderId})`);

};

const handleDelivered = (vendor, orderId) => {
    console.log(`package is delivered: `);

};

module.exports = {
    pickupNotificationHandler
};