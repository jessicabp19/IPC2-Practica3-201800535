"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = __importDefault(require("../controllers/usuariosController"));
class UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usuariosController_1.default.list);
        this.router.get('/:id', usuariosController_1.default.serch);
        this.router.get('/:user/:contrasenia', usuariosController_1.default.verify);
        this.router.post('/', usuariosController_1.default.create);
        this.router.delete('/:id', usuariosController_1.default.delete);
        this.router.put('/:id', usuariosController_1.default.update);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
