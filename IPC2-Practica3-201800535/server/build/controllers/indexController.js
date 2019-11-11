"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ tex: 'API Is /api/games(o estudiantes, etc)' });
    }
}
exports.indexController = new IndexController();
