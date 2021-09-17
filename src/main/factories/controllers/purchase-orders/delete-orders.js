const PurchaseOrderRepository = require('../../../../repositories/purchase-orders');
const DeletePurchaseOrderController = require('../../../../controllers/purchase-orders/delete-orders');

module.exports = () => {
    const repository = new PurchaseOrderRepository();
    return new DeletePurchaseOrderController(repository);
};
