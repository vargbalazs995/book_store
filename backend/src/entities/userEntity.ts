import {model,Schema,Types,Model} from "mongoose";

export interface IUser extends Document{
    _id: Types.ObjectId,
    username: string,
    password: string,
    email: string,
    reviews: [Types.ObjectId]
}

export const userSchema = new Schema<IUser>({
    _id: Types.ObjectId,
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    reviews: [{type: Schema.Types.ObjectId, ref: 'Reviews',default: null}]
})

export const UserModel: Model<IUser> = model('User', userSchema);