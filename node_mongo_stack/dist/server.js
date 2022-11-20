"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// port
const PORT = process.env.PORT || 5000;
// initial app
const app = new app_1.default();
// starting server by listen express
app.listen(PORT);
