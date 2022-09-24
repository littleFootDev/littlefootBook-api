import { Context } from 'koa';
import Joi from '@hapi/joi';
import { IBook } from '../interface/book.interface';
import { BookModel } from '../models/books/Book.model';

export class Book {
  public async getAllBooks(ctx: Context): Promise<void> {
    try {
      const books = await BookModel.find({});
      ctx.body = { message: 'All books', books };
    } catch (error) {
      ctx.body = error;
    }
  }
  public async addBook(ctx: Context): Promise<void> {
    try {
      const body: IBook = ctx.request.body;
      //const schema = Joi.object().keys({
        //title: Joi.string().required(),
        //relaseDate: Joi.string().required(),
        //description: Joi.string().required(),
        //author: Joi.object().required(),
        //avaible: Joi.boolean().required()
      //});
      //const value: IBook = await schema.validateAsync(body);

      const book = await BookModel.create(body);
      ctx.body = { message: 'Book adding succesfully', book };
    } catch (error) {
      ctx.body = error;
    }
  }

  public async editBook(ctx: Context): Promise<void> {
    try {
      const body: IBook = ctx.request.body;
      const { id } = ctx.params;
      const schema = Joi.object().keys({
        title: Joi.string().optional(),
        relaseDate: Joi.string().optional(),
        description: Joi.string().optional(),
        author: Joi.array().optional(),
        avaible: Joi.boolean().optional()
      });
      const value: IBook = await schema.validateAsync(body);
      await BookModel.updateOne(
        {
          _id: id
        },
        {
          title: value.title,
          relaseDate: value.relaseDate,
          description: value.description,
          author: value.author,
          avaible: value.avaible
        }
      );
      ctx.body = {message: "Book updated successfully"};
        
    } catch (error) {
      ctx.body = error;
    }
  }
  public async getOneBook (ctx: Context): Promise<void> {
    try {
        const { id} = ctx.params;
        const book = await BookModel.findById(id);
        ctx.body = {message: "The book was found", book}
    } catch (error) {
        ctx.body = error;
    }
  }
  public async deleteBook (ctx: Context): Promise<void> {
    try {
        const { id} = ctx.params;
        await BookModel.deleteOne({id});
        ctx.body = { message: "The book has been deleted "}
    } catch (error) {
        ctx.body = error;
    }
  }
}
