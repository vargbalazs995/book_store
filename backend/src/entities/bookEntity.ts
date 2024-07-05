import * as mongoose from "mongoose";

const {Schema}= mongoose;

const bookSchema = new Schema({
    title: {type:String, required:true, unique: true},
    description: String,
    author: String,
})

export const BookModel = mongoose.model('Books', bookSchema);