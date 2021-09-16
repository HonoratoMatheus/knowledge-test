const { serverError, badRequest, created } = require('../../utils/http/http-helper');

module.exports = class CreatePurchaseOrderController {
    constructor(repository, validation) {
        this.repository = repository;
        this.validation = validation;
    }

    async handle(request) {
        try {
            const errors = this.validation.validate(request.body);
            ;
            if (errors.length > 0) {
                return badRequest(errors);
            }

            const serializedOrders = this.serializeOrdersToDb(request.body);
            await this.repository.create(serializedOrders);
            return created(request.body);
        } catch (error) {
            return serverError(error);
        }
    }

    serializeOrdersToDb(orders) {
        orders = Array.isArray(orders) ? orders : [orders];

        return orders.map(order => ([
            order.product_id,
            order.price,
        ]));
    }
};
