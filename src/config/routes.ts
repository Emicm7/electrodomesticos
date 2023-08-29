import { Application } from 'express';
import materialRoutes from '../Materiales/materiales.routes';
import proveedorRoutes from '../Proveedores/proveedores.routes';
import { logger } from '@utils/logger';

export const register = async (app:Application) => {
    app.use('/materiales', materialRoutes);
    app.use('/proveedores', proveedorRoutes);
  logger.info('🟢 Routes registered.');
};