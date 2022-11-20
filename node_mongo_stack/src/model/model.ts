import mongoose from "mongoose";
import DbSchema from "./dbSchema";

class Model {
    private schema = new DbSchema();

    // order item model
    public OrderItemModel = mongoose.model('OrderItems', this.schema.orderItemsSchema, 'orderItems');

    // order model
    public OrderModel = mongoose.model('Order', this.schema.orderSchema, 'order');
}
export default Model;