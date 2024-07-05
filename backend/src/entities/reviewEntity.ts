import * as mongoose from "mongoose";

const {Schema} = mongoose;

const reviewSchema = new Schema({
    review: {type: String, min:50},
    rating: Number,
})

export const reviewModel = mongoose.model('Review', reviewSchema);