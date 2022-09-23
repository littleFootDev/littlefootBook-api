import { Context } from "koa";
import Joi from "@hapi/joi"
import {IBook} from "../interface/book.interface"
import {BookModel} from "../models/books/Book.model"

export class Book { 
    public async getAllBooks(ctx: Context): Promise<void> {
        try {
            const books = await BookModel.find({})
            ctx.body = {message: "All books", books};
        } catch (error) {
            ctx.body = error;
        }

    }
    public async addBook(ctx: Context) : Promise<void> {
        try {
            
            const value : IBook = ctx.request.body
            const book = await BookModel.create(value);
            ctx.body = {message: 'Book adding succesfully', book}
        } catch (error) {
            ctx.body = error;
        }
    }
}