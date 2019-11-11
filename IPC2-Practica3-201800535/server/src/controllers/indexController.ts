import { Request, Response} from 'express';

class IndexController{

    public index (req: Request, res: Response) {
        res.json({tex: 'API Is /api/games(o estudiantes, etc)'});
    } 
}

export const indexController = new IndexController();