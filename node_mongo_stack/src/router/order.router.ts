import Router from "express";
import OrderController from "../controller/order.controller";

class Routers {
    public router;
    private orderController = new OrderController();
    constructor() {
        this.router = Router();
        this.callRouter();
    }
    private callRouter() {
        // create order router
        this.router.post('/create', this.orderController.createOrderController);

        // get all order router
        this.router.get('/get/all', this.orderController.getAllOrderController)

        // get a single order
        this.router.get('/get/:id', this.orderController.getSingleOrderController)
    }

}

export default Routers;