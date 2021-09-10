const { adaptRoute } = require('../adapters/express-router-adapter');
const makeListPurchaseOrders = require('../factories/controllers/purchase-orders/list-orders');

module.exports = (router) => {
    router.get('/orders', adaptRoute(makeListPurchaseOrders()));
};
