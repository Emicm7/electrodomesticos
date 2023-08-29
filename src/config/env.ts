import * as dotenv from 'dotenv';
import {
  cleanEnv, port, str, url,
} from 'envalid';
import { logger } from '@utils/logger';

// define your new .env properties here and assign an envalid validator
class Env {
    NODE_ENV = str();
    NAME = str();
    URL = url();
    PORT = port();
}

class ExtendedEnv extends Env {
    NODE_ENV = str()
}

type EnvProperties<T> = {
    // eslint-disable-next-line no-unused-vars
    [Property in keyof T]: string
};

dotenv.config();

cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['local', 'development', 'test', 'stage', 'qa', 'production'] }),
});

const envPath = `${process.cwd()}/.${process.env.NODE_ENV}.env`;
dotenv.config({ path: envPath });

const validators = new ExtendedEnv();

cleanEnv(process.env, validators);

const env = Object.fromEntries(
  Object.keys(validators).map((key: string) => [key, process.env[key]]),
) as EnvProperties<ExtendedEnv>;

logger.info(`🟢 ${env.NODE_ENV} environment loaded.`);

export default env;
