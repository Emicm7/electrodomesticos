import { Sequelize } from 'sequelize';
import { logger } from '@utils/logger';

const sequelize = new Sequelize('electrodomesticos', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
});

export const configure = async () => {
  try {
    await sequelize.authenticate();
    logger.info('🟢 Database connected.');
  } catch (error) {
    logger.error(`🔴 Unable to connect to the database: ${error}`);
  }
};

export { sequelize };





