const { adaptRoute } = require('../adapters/express-router-adapter');
const makeListPurchaseOrders = require('../factories/controllers/purchase-orders/list-orders');
const makeCreatePurchaseOrders = require('../factories/controllers/purchase-orders/create-orders');

module.exports = (router) => {
    router.get('/orders', adaptRoute(makeListPurchaseOrders()));
    router.post('/orders', adaptRoute(makeCreatePurchaseOrders()));
};
