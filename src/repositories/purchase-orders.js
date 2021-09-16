const makeDbInstance = require('../main/factories/db');

const db = makeDbInstance();

module.exports = class PurchaseOrdersRepository {
    async findAll() {
        console.log(this);
        const sql = `
            SELECT
                purchase_orders.id AS id,
                product_id,
                description,
                deletion_flag,
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
            WHERE purchase_orders.deletion_flag IS NOT "DELETED"
            
        `;
        const purchase_orders = await db.select(sql);

        return purchase_orders;
    }
    async create(purchase_order) {
        const sql = `
            INSERT INTO 
                purchase_orders (product_id, price) 
            VALUES 
                (?,?);
        `;

        return db.persistMany(sql, purchase_order);
    }
    async delete(order_id) {
        console.log('DELETING');
        const sql = `
            UPDATE
                purchase_orders
            SET
                deletion_flag = "DELETED"
            WHERE
                purchase_orders.id = (?)
        `;
        return db.persistMany(sql, order_id);
    }
};
