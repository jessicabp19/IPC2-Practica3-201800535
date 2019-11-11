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
const database_1 = __importDefault(require("../database"));
class UsuariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield (yield database_1.default).query('SELECT * FROM Usuario');
            res.json(usuarios);
        });
    }
    serch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield (yield database_1.default).query('SELECT * FROM Usuario WHERE id_usuario=?', [id]);
            console.log(usuario); //LO PUEDO QUITAR
            if (usuario.length > 0) {
                return res.json(usuario[0]);
            }
            else {
                res.status(404).json({ text: "El usuario no existe!" });
            }
        });
    }
    verify(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = req.params;
            const { contrasenia } = req.params;
            console.log("ANTES DEL QUERY");
            const estudiantes = yield (yield database_1.default).query('SELECT * FROM Usuario WHERE nom_user=? AND contrasenia=?', [user, contrasenia]);
            console.log(estudiantes); //LO PUEDO QUITAR
            if (estudiantes.length > 0) {
                return res.json(estudiantes[0]);
            }
            else {
                //res.status(404).json({text: "El estudiante no existe!"});
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body); //LO PUEDO QUITAR
            const estudiantes = yield (yield database_1.default).query('INSERT INTO Usuario set ?', [req.body]);
            res.json({ message: 'Usuario Creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const busqueda = yield (yield database_1.default).query('SELECT * FROM Usuario WHERE id_usuario=?', [id]);
            console.log(busqueda);
            if (busqueda.length > 0) {
                const estudiantes = yield (yield database_1.default).query('DELETE FROM Usuario WHERE id_usuario=?', [id]);
                res.json({ message: 'El Usuario fue eliminado' });
            }
            else {
                res.status(404).json({ text: "El Usuario no existe!" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const busqueda = yield (yield database_1.default).query('SELECT * FROM Usuario WHERE id_usuario=?', [id]);
            console.log(busqueda);
            if (busqueda.length > 0) {
                const estudiantes = yield (yield database_1.default).query('UPDATE Usuario set ? WHERE id_usuario=?', [req.body, id]);
                res.json({ message: 'El Usuario fue actualizado' });
            }
            else {
                res.status(404).json({ text: "El Usuario no existe!" });
            }
        });
    }
}
const usuariosController = new UsuariosController();
exports.default = usuariosController;
