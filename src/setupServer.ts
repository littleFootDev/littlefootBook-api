import koa from 'koa';
import koaCors from 'koa2-cors';
import bodyParser from 'koa-bodyParser';
import dotenv from 'dotenv';

import {registerRouter} from './routes'

dotenv.config();
const port = process.env.PORT
async function serverSetup() {
    const server: koa = new koa();
    middlewares(server);
    await startServer(server);
}
function middlewares(server: koa) {
    server.use(bodyParser());
    server.use(koaCors());

    const routes = registerRouter().routes();

    server.use(routes);
}

async function startServer(server:koa) {
    try {
        const serverStarted: Promise<void> = new Promise<void>((resolve, reject) => {
            server.listen(port,resolve);
            console.log(`Server is running on ${port}`);    
        });
    } catch (err) {
        console.log(err);
        return err;
    }
}

export {serverSetup}