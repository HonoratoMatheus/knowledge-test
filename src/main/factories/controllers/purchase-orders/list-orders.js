const PurcharseOrdersRepository = require('../../../../repositories/purchase-orders');
const ListPurchaseOrdersController = require('../../../../controllers/purchase-orders/list-orders');

module.exports = () => {
    const repository = new PurcharseOrdersRepository();
    return new ListPurchaseOrdersController(repository);
};
