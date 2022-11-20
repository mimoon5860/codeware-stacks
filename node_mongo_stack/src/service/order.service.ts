import { Request } from "express";
import Model from "../model/model";

class OrderService {
    private model = new Model();

    // create order service
    public async createOrder(req: Request) {
        const { orderItems, phone } = req.body;
        const orderItemRes = await this.model.OrderItemModel.insertMany(orderItems);
        const itemsId = orderItemRes.map((item) => item.id);
        const order = await this.model.OrderModel.create({ itemsId, phone });
        return {
            success: true,
            data: { id: order.id, phone: order.phone, orderItems: itemsId }
        }
    }

    // get all order service
    public async getAllOrder() {
        const orders = await this.model.OrderModel.find().populate({ path: 'orderItems', select: ['id', 'product', 'quantity'] });
        return {
            success: true,
            data: orders
        }
    }

    // get single order service
    public async getSingleOrder(req: Request) {
        const { id } = req.params;
        const order = await this.model.OrderModel.findById(id).populate({ path: 'orderItems', select: ['id', 'product', 'quantity'] });
        if (order) {
            return {
                success: true,
                data: order
            }
        } else {
            return {
                success: false,
                message: 'No order found with this is'
            }
        }
    }
}

export default OrderService;