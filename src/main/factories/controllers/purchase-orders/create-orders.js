const PurchaseOrdersRepository = require('../../../../repositories/purchase-orders');
const CreatePurchaseOrderController = require('../../../../controllers/purchase-orders/create-orders');

const makeCreateOrderValidators = require('../../validators/purchase-order/create-order');

module.exports = () => {
    const repository = new PurchaseOrdersRepository();
    const validators = makeCreateOrderValidators();
    return new CreatePurchaseOrderController(repository, validators);
};
