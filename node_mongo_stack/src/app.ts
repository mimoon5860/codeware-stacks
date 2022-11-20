import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors'
import Routers from './router/order.router';
import mongoose from 'mongoose';
import { dbUri } from './utils/constants';

class App {
    private app: Application;
    private routers = new Routers();
    private dbUrl: string;

    constructor() {
        this.app = express();
        this.dbUrl = dbUri;
        this.dbConnect();
        this.initMiddleWare();
        this.initRouter();
    }

    // db connect 
    private async dbConnect() {
        try {
            await mongoose.connect(this.dbUrl);
            console.log('Database connected');
        } catch (err: any) {
            console.log(err);
            throw new Error(err);
        }
    }

    // init routers
    private initRouter() {
        // root router
        this.app.get('/', (_req: Request, res: Response) => {
            res.send('Node server is running...');
        })

        // initial all routers
        this.app.use('/api/order', this.routers.router);

        // invalid route response
        this.app.get('*', (req: Request, res: Response) => {
            res.status(404).json({
                success: false,
                message: "Invalid route"
            })
        })

        // error handling response
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction,) => {
            res.status(500).json({
                success: false,
                message: err
            })
        })
    }

    // init middleware
    private initMiddleWare() {
        this.app.use(express.json());
        this.app.use(cors());
    }

    // server listen
    public listen(port: number | string) {
        this.app.listen(port, () => {
            console.log('app is running at port:', port);
        })
    }
}

export default App;