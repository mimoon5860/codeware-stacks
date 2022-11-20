import { NextFunction, Request, Response } from "express";
import OrderService from "../service/order.service";
type func = (req: Request, res: Response, next?: NextFunction) => Promise<void>;

class OrderController {
    private orderService = new OrderService();

    // wrapper for handle error
    private wrapper(cb: func) {
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                await cb(req, res);
            } catch (err: any) {
                next(err.message);
            }
        };
    }

    // order create controller
    public createOrderController = this.wrapper(async (req: Request, res: Response) => {
        const data = await this.orderService.createOrder(req);
        if (data.success) {
            res.status(200).json(data)
        } else {
            res.status(500).json(data);
        }

    })

    // get all order
    public getAllOrderController = this.wrapper(async (req: Request, res: Response) => {
        const data = await this.orderService.getAllOrder();
        if (data.success) {
            res.status(200).json(data)
        } else {
            res.status(500).json(data);
        }

    })

    // get a single order
    public getSingleOrderController = this.wrapper(async (req: Request, res: Response) => {
        const data = await this.orderService.getSingleOrder(req);
        if (data.success) {
            res.status(200).json(data)
        } else {
            res.status(505).json(data);
        }

    })
}
export default OrderController;