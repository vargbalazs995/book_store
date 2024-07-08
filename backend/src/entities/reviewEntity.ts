import {model,Schema,Types,Model} from "mongoose";

export interface IReview extends Document{
    _id: Types.ObjectId,
    review: string,
    rating: number,
    book_id: Types.ObjectId,
    user_id: Types.ObjectId
}

export const reviewSchema = new Schema<IReview>({
    _id: { type: Schema.Types.ObjectId, auto: true },
    review: {type: String, min:20,required: true},
    rating: {type: Number, required:true},
    book_id: {type: Schema.Types.ObjectId, ref: "Book", required:true},
    user_id: {type: Schema.Types.ObjectId, ref: "User", required: true},
})

export const ReviewModel:Model<IReview> = model('Review', reviewSchema);