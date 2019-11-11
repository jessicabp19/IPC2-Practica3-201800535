  
import { Request, Response} from 'express';

import pool from '../database';

class UsuariosController{

    public async list (req: Request, res: Response): Promise<void>{//LISTANDO TODOS
        const usuarios = await(await pool).query('SELECT * FROM Usuario');
        res.json(usuarios);
    }
    
    public async serch(req: Request, res:Response): Promise<any>{//MOSTRAR 1
        const{id}=req.params;
        const usuario = await(await pool).query('SELECT * FROM Usuario WHERE id_usuario=?', [id]);
        console.log(usuario);//LO PUEDO QUITAR
        if(usuario.length>0){
            return res.json(usuario[0]); 
        }else{
            res.status(404).json({text: "El usuario no existe!"});
        }
    }

    public async verify(req: Request, res:Response): Promise<any>{
        const{user}=req.params;
        const{contrasenia}=req.params;
        console.log("ANTES DEL QUERY");
        const estudiantes = await(await pool).query('SELECT * FROM Usuario WHERE nom_user=? AND contrasenia=?', [user,contrasenia]);
        console.log(estudiantes);//LO PUEDO QUITAR
        if(estudiantes.length>0){
            return res.json(estudiantes[0]); 
        }else{
            //res.status(404).json({text: "El estudiante no existe!"});
        }
    }

    public async create(req: Request, res:Response): Promise<void>{
        console.log(req.body);//LO PUEDO QUITAR
        const estudiantes = await(await pool).query('INSERT INTO Usuario set ?', [req.body]);
        res.json({message: 'Usuario Creado'});
    }

    public async delete(req: Request, res:Response): Promise<any>{
        const{id}=req.params;
        const busqueda = await(await pool).query('SELECT * FROM Usuario WHERE id_usuario=?', [id]);
        console.log(busqueda);
        if(busqueda.length>0){
            const estudiantes = await(await pool).query('DELETE FROM Usuario WHERE id_usuario=?', [id]);
            res.json({message: 'El Usuario fue eliminado'});
        }else{
            res.status(404).json({text: "El Usuario no existe!"});
        }
    }
    
    public async update(req: Request, res:Response): Promise<any>{
        const{id}=req.params;
        const busqueda = await(await pool).query('SELECT * FROM Usuario WHERE id_usuario=?', [id]);
        console.log(busqueda);
        if(busqueda.length>0){
            const estudiantes = await(await pool).query('UPDATE Usuario set ? WHERE id_usuario=?', [req.body, id]);
            res.json({message: 'El Usuario fue actualizado'});
        }else{
            res.status(404).json({text: "El Usuario no existe!"});
        }
        
    }
}
 
const usuariosController = new UsuariosController();
export default usuariosController;