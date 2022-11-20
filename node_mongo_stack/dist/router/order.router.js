"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = __importDefault(require("../controller/order.controller"));
class Routers {
    constructor() {
        this.orderController = new order_controller_1.default();
        this.router = (0, express_1.default)();
        this.callRouter();
    }
    callRouter() {
        // create order router
        this.router.post('/create', this.orderController.createOrderController);
        // get all order router
        this.router.get('/get/all', this.orderController.getAllOrderController);
        // get a single order
        this.router.get('/get/:id', this.orderController.getSingleOrderController);
    }
}
exports.default = Routers;
