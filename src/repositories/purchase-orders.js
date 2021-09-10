const makeDbInstance = require('../main/factories/db');

const db = makeDbInstance();

module.exports = class PurchaseOrdersRepository {
    async findAll() {
        const sql = `
            SELECT
                purchase_orders.id AS id,
                product_id,
                description,
                price,
                supplier_id,
                name,
                country

            FROM
                purchase_orders
            INNER JOIN products
                ON products.id = purchase_orders.product_id
            INNER JOIN suppliers
                ON suppliers.id = products.supplier_id 
        `;
        const purchase_orders = await db.select(sql);

        return purchase_orders;
    }
    async create(purchase_order) {
        const sql = `
            INSERT INTO 
                purchase_orders (product_id, id) 
            VALUES 
                (?,?);
        `;

        return db.persistMany(sql, purchase_order);
    }
};
