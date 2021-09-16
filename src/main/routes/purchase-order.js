const { adaptRoute } = require('../adapters/express-router-adapter');
const makeListPurchaseOrders = require('../factories/controllers/purchase-orders/list-orders');
const makeCreatePurchaseOrders = require('../factories/controllers/purchase-orders/create-orders');
const makeDeletePurchaseOrders = require('../factories/controllers/purchase-orders/delete-orders');

module.exports = (router) => {
    router.get('/orders', adaptRoute(makeListPurchaseOrders()));
    router.post('/orders', adaptRoute(makeCreatePurchaseOrders()));
    router.delete('/orders/:id', adaptRoute(makeDeletePurchaseOrders()));
};
