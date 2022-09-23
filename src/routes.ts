import Router from "koa-router";
import { Book } from "./controllers/book.controller";


export function registerRouter() {
    const router = new Router();

    // Book Route
    router.get('/books', Book.prototype.getAllBooks);
    router.post('/books/Add', Book.prototype.addBook);

    return router;
}