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
const cross_fetch_1 = __importDefault(require("cross-fetch"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    // fetching all data
    const res = yield (0, cross_fetch_1.default)('https://coderbyte.com/api/challenges/json/age-counting');
    const { data } = yield res.json();
    // convert data string to array and find age 30 keys
    const dataArr = data.split(', ');
    const keys = [];
    for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i] === 'age=30') {
            const key = dataArr[i - 1].split('=')[1];
            keys.push(key);
        }
    }
    console.log(keys);
}))();
