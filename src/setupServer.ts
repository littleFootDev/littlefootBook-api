import koa from 'koa';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT
async function serverSetup() {
    const server: koa = new koa();
    await startServer(server);
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