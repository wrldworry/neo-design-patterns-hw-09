"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonIterator = void 0;
const fs_1 = __importDefault(require("fs"));
class JsonIterator {
    constructor(filePath) {
        this.users = [];
        const content = fs_1.default.readFileSync(filePath, 'utf-8');
        this.users = JSON.parse(content);
    }
    *[Symbol.iterator]() {
        for (const user of this.users) {
            yield user;
        }
    }
}
exports.JsonIterator = JsonIterator;
