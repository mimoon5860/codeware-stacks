"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../model/model"));
class OrderService {
    constructor() {
        this.model = new model_1.default();
    }
    // create order service
    createOrder(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { orderItems, phone } = req.body;
            const orderItemRes = yield this.model.OrderItemModel.insertMany(orderItems);
            const itemsId = orderItemRes.map((item) => item.id);
            const order = yield this.model.OrderModel.create({ itemsId, phone });
            return {
                success: true,
                data: { id: order.id, phone: order.phone, orderItems: itemsId }
            };
        });
    }
    // get all order service
    getAllOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield this.model.OrderModel.find().populate({ path: 'orderItems', select: ['id', 'product', 'quantity'] });
            return {
                success: true,
                data: orders
            };
        });
    }
    // get single order service
    getSingleOrder(req) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const order = yield this.model.OrderModel.findById(id).populate({ path: 'orderItems', select: ['id', 'product', 'quantity'] });
            if (order) {
                return {
                    success: true,
                    data: order
                };
            }
            else {
                return {
                    success: false,
                    message: 'No order found with this is'
                };
            }
        });
    }
}
exports.default = OrderService;
