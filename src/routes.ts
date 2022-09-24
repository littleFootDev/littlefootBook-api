import Router from "koa-router";
import { Book } from "./controllers/book.controller";


export function registerRouter() {
    const router = new Router();

    // Book Route
    router.get('/books', Book.prototype.getAllBooks);
    router.get('/books/:id', Book.prototype.getOneBook);
    router.post('/books/Add', Book.prototype.addBook);
    router.put('/books/update/:id', Book.prototype.editBook);
    router.delete('/books/delete/:id', Book.prototype.deleteBook);


    return router;
}