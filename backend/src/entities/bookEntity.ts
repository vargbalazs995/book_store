import {model,Schema,Types,Model} from "mongoose";

export interface IBook extends Document {
    _id: Types.ObjectId;
    title: string;
    description: string;
    author: string;
    reviews: [Types.ObjectId]
}

export const bookSchema = new Schema<IBook>({
    _id: { type: Schema.Types.ObjectId, auto: true },
    title: {type:String, required:true, unique: true},
    description: String,
    author: {type:String, required:true},
    reviews: [{type:Schema.Types.ObjectId, ref:"Review", default:null}],
})

export const BookModel : Model<IBook> = model('Book', bookSchema);