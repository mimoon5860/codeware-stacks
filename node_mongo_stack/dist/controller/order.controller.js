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
const order_service_1 = __importDefault(require("../service/order.service"));
class OrderController {
    constructor() {
        this.orderService = new order_service_1.default();
        // order create controller
        this.createOrderController = this.wrapper((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.orderService.createOrder(req);
            if (data.success) {
                res.status(200).json(data);
            }
            else {
                res.status(500).json(data);
            }
        }));
        // get all order
        this.getAllOrderController = this.wrapper((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.orderService.getAllOrder();
            if (data.success) {
                res.status(200).json(data);
            }
            else {
                res.status(500).json(data);
            }
        }));
        // get a single order
        this.getSingleOrderController = this.wrapper((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.orderService.getSingleOrder(req);
            if (data.success) {
                res.status(200).json(data);
            }
            else {
                res.status(505).json(data);
            }
        }));
    }
    // wrapper for handle error
    wrapper(cb) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield cb(req, res);
            }
            catch (err) {
                next(err.message);
            }
        });
    }
}
exports.default = OrderController;
