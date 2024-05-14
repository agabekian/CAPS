
const pickupNotificationHandler = (vendor, orderId) => {
    console.log(`Vendor ${vendor} has a package to be picked up (ID: ${orderId})`);
};


module.exports = {
    pickupNotificationHandler
};