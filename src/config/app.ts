import express, { Application } from 'express';
import * as routes from '../config/routes';
import * as database from '../config/database';
import bodyParser from 'body-parser';
import * as path from 'path';
import * as dotenv from 'dotenv';
import env from '../config/env';

dotenv.config();

const app: Application = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set('port', env.PORT);
database.configure();
routes.register(app);
app.use(express.static(path.join(__dirname, 'public')));

export default app;

