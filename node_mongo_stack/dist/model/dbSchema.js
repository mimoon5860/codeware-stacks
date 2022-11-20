"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class DbSchema {
    constructor() {
        // Order items schema
        this.orderItemsSchema = new mongoose_1.default.Schema({
            product: {
                type: String,
                required: [true, 'Provide product name ']
            },
            quantity: {
                type: String,
                required: [true, 'Provide product quantity']
            }
        }, { timestamps: true });
        // Order schema
        this.orderSchema = new mongoose_1.default.Schema({
            orderItems: {
                type: [mongoose_1.default.Schema.Types.ObjectId],
                required: [true, 'Provide order products id for create an order'],
                ref: 'OrderItems'
            },
            phone: {
                type: String,
                required: [true, 'Provide phone number']
            }
        }, { timestamps: true });
    }
}
exports.default = DbSchema;
