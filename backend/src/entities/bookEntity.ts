import {model,Schema,Types,Model} from "mongoose";

export interface IBook extends Document {
    _id: Types.ObjectId;
    title: string;
    description: string;
    author: string;
    reviews: [Types.ObjectId]
}

export const bookSchema = new Schema<IBook>({
    _id: Types.ObjectId,
    title: {type:String, required:true, unique: true},
    description: String,
    author: String,
    reviews: [{type:Types.ObjectId, ref:"Review"}],
})

export const BookModel : Model<IBook> = model('Book', bookSchema);