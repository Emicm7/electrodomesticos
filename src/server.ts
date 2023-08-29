process.on('uncaughtException', (err) => { console.log(err); });
process.on('unhandledRejection', (err) => { console.log(err); });
process.on('exit', (err) => { console.log(err); });

import 'ts-path-mapping/register';
import App from '../src/config/app';
import { logger } from '../src/utils/logger';

const app = App;
app.listen(app.get('port'), () => {
  logger.info(`🚀 App listening on the port ${app.get('port')}`);
});