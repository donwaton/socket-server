import { Router, Request, Response, response } from 'express';

export const router = Router();

router.get('/mensajes',(req: Request,res: Response) =>{
    res.json({
        ok: true,
        mensaje: 'GET - Ok!'
    });
});

router.post('/mensajes',(req: Request,res: Response) =>{

    const nombre = req.body.nombre;
    const id = req.params.id;

    res.json({
        ok: true,
        mensaje:    'POST - Ok!',
        nombre:     nombre,
        id:         id
    });
});

export default router;