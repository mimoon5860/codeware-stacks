"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbSchema_1 = __importDefault(require("./dbSchema"));
class Model {
    constructor() {
        this.schema = new dbSchema_1.default();
        // order item model
        this.OrderItemModel = mongoose_1.default.model('OrderItems', this.schema.orderItemsSchema, 'orderItems');
        // order model
        this.OrderModel = mongoose_1.default.model('Order', this.schema.orderSchema, 'order');
    }
}
exports.default = Model;
