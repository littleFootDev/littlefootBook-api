import mongoose from 'mongoose';
import {IBook} from '../../interface/book.interface';
import { bookSchema } from './Book.schema';


const bookModel: mongoose.Model<IBook> = mongoose.model<IBook>('Book', bookSchema, 'Book');

export {bookModel as BookModel}
