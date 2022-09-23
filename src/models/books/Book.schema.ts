import mongoose from 'mongoose';

const bookSchema: mongoose.Schema = new mongoose.Schema({
    title : {
        type: String,
        required: [true, 'Un livre doit avoir un titre']
    },
    image: { 
        type: String,
        //required: [true, 'Un livre doit avoir une image']
    },
    relaseDate: {
        type: String,
        required: [true, 'Un livre doit avoir une date de parution']
    },
    description: {
        type: String,
        required: [true, 'Un livre doit avoir une description'],
        minLength:[10, 'la description doit contenir au moins 10 caractéres '],
        maxLength:[200, 'la description doit pas dépasser 200 caractéres ']
    },
    author: {
        name:{type: String, required: [true, 'Un author doit avoir un nom']},
        lastName: {type: String, required: [true, 'Un author doit avoir un prénom']}
    },
    genre: {
        type : String,
        enum: ["Policier", "Fantastique", "Triller", "Documentaire"] 
    },
    avaible: {
        type : Boolean,
        default: true
    }

});

//bookSchema.virtual('fullName', function () {
    //return `${this.author.name} ${this.author.lastName}`; 
//});

export {bookSchema}