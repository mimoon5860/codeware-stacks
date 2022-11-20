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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const order_router_1 = __importDefault(require("./router/order.router"));
const mongoose_1 = __importDefault(require("mongoose"));
const constants_1 = require("./utils/constants");
class App {
    constructor() {
        this.routers = new order_router_1.default();
        this.app = (0, express_1.default)();
        this.dbUrl = constants_1.dbUri;
        this.dbConnect();
        this.initMiddleWare();
        this.initRouter();
    }
    // db connect 
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect(this.dbUrl);
                console.log('Database connected');
            }
            catch (err) {
                console.log(err);
                throw new Error(err);
            }
        });
    }
    // init routers
    initRouter() {
        // root router
        this.app.get('/', (_req, res) => {
            res.send('Node server is running...');
        });
        // initial all routers
        this.app.use('/api/order', this.routers.router);
        // invalid route response
        this.app.get('*', (req, res) => {
            res.status(404).json({
                success: false,
                message: "Invalid route"
            });
        });
        // error handling response
        this.app.use((err, req, res, next) => {
            res.status(500).json({
                success: false,
                message: err
            });
        });
    }
    // init middleware
    initMiddleWare() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    // server listen
    listen(port) {
        this.app.listen(port, () => {
            console.log('app is running at port:', port);
        });
    }
}
exports.default = App;
