const PurchaseOrderRepository = require('../../../../repositories/purchase-orders');
const DeletePurchaseOrderController = require('../../../../controllers/purchase-orders/delete-orders');

// const makeDeleteOrderValidators = require('../../validators/purchase-order/delete-order');

module.exports = () => {
    const repository = new PurchaseOrderRepository();
    // const validators = new makeDeleteOrderValidators();
    return new DeletePurchaseOrderController(repository);
};
