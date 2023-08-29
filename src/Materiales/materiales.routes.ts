import { Router } from 'express';
import * as materialController from '../Materiales/materiales.controller';

const router = Router();

// OBTENER TODOS
router.get('/all', materialController.index);
// OBTENER UNO
router.get('/show/:id', materialController.show);
// CREAR NOMBRE
router.post('/post/', materialController.post);
// ACTUALIZAR NOMBRE
router.put('/update/:id', materialController.update);
// BORRAR
router.delete('/delete/:id', materialController.destroy);

export default router;