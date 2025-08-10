"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvIterator = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvIterator {
    constructor(filePath) {
        this.users = [];
        const content = fs_1.default.readFileSync(filePath, 'utf-8');
        const lines = content.trim().split('\n').slice(1);
        this.users = lines.map(line => {
            const [id, name, email, phone] = line.split(',');
            return { id: Number(id), name, email, phone };
        });
    }
    *[Symbol.iterator]() {
        for (const user of this.users) {
            yield user;
        }
    }
}
exports.CsvIterator = CsvIterator;
