import * as mongoose from "mongoose";

const {Schema}= mongoose;

const bookSchema = new Schema({
    title: {type:String, required:true, unique: true},
    description: String,
    author: String,
    reviews: {type:Schema.Types.ObjectId, ref:"Review"},
})

export const BookModel = mongoose.model('Books', bookSchema);