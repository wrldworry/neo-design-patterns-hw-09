"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataExporter = void 0;
const axios_1 = __importDefault(require("axios"));
class DataExporter {
    constructor() {
        this.data = [];
        this.result = '';
    }
    async export() {
        await this.load();
        this.transform();
        this.beforeRender();
        this.render();
        this.afterRender();
        this.save();
    }
    async load() {
        const response = await axios_1.default.get('https://jsonplaceholder.typicode.com/users');
        this.data = response.data;
    }
    transform() {
        this.data = this.data.map(({ id, name, email, phone }) => ({ id, name, email, phone }));
        this.data.sort((a, b) => a.name.localeCompare(b.name));
    }
    beforeRender() { }
    afterRender() { }
}
exports.DataExporter = DataExporter;
