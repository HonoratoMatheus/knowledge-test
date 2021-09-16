const { serverError, success } = require('../../utils/http/http-helper');

module.exports = class DeletePurchaseOrderController {
    constructor(repository, validation) {
        this.repository = repository;
        this.validation = validation;
    }

    async handle(request) {
        console.log('request', request.route.id);
        try {
            const orders = await this.repository.delete(request.route.id);
            return success({ orders });
        } catch (error) {
            console.log(error);
            return serverError(error);
        }
    }
};
