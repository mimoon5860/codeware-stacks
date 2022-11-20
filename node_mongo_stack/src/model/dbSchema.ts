import mongoose from "mongoose";

class DbSchema {
    // Order items schema
    public orderItemsSchema = new mongoose.Schema({
        product: {
            type: String,
            required: [true, 'Provide product name ']
        },
        quantity: {
            type: String,
            required: [true, 'Provide product quantity']
        }
    }, { timestamps: true })

    // Order schema
    public orderSchema = new mongoose.Schema({
        orderItems: {
            type: [mongoose.Schema.Types.ObjectId],
            required: [true, 'Provide order products id for create an order'],
            ref: 'OrderItems'
        },
        phone: {
            type: String,
            required: [true, 'Provide phone number']
        }
    }, { timestamps: true })
}
export default DbSchema;