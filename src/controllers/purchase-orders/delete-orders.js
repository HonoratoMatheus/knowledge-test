const { serverError, success } = require('../../utils/http/http-helper');

module.exports = class DeletePurchaseOrderController {
    constructor(repository) {
        this.repository = repository;
    }

    async handle(request) {
        try {
            const orders = await this.repository.delete(request.route.id);
            return success({ orders });
        } catch (error) {
            console.log(error);
            return serverError(error);
        }
    }
};
