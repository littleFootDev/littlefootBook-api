import mongoose from 'mongoose';

export interface IBook extends mongoose.Document {
    title: string;
    image?: string;
    relaseDate: string;
    description: string;
    author: [string, string];
    genre: string;
    avaible: boolean;
};