const PurchaseOrderRepository = require('../../../../repositories/purchase-orders');
const ListPurchaseOrdersController = require('../../../../controllers/purchase-orders/list-orders');

module.exports = () => {
    const repository = new PurchaseOrderRepository();
    return new ListPurchaseOrdersController(repository);
};
