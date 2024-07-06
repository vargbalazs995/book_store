import {model,Schema,Types,Model} from "mongoose";

export interface IReview extends Document{
    _id: Types.ObjectId,
    review: string,
    rating: number,
    user: [Types.ObjectId]
}

export const reviewSchema = new Schema<IReview>({
    _id: Schema.Types.ObjectId,
    review: {type: String, min:50},
    rating: Number,
    user: [{type: Types.ObjectId, ref: "User"},]
})

export const ReviewModel:Model<IReview> = model('Review', reviewSchema);