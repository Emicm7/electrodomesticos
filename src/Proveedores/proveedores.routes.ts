import { Router } from 'express';
import * as proveedorController from '../Proveedores/proveedores.controller';

const router = Router();

// OBTENER TODOS
router.get('/all', proveedorController.index);
// OBTENER UNO
router.get('/show/:id', proveedorController.show);
// CREAR NOMBRE
router.post('/post/', proveedorController.post);
// ACTUALIZAR NOMBRE
router.put('/update/:id', proveedorController.update);
// BORRAR
router.delete('/delete/:id', proveedorController.destroy);

export default router;