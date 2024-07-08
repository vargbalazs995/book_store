import {IdentityDTO, PostReviewDTO,} from "../dtos";
import {BookModel} from "../entities/bookEntity";
import {UnprocessableEntityError} from "../errors/UnorocessableEntityError";
import {ReviewModel} from "../entities/reviewEntity";
import {UserModel} from "../entities/userEntity";

export const addNewReview = async (identityDto:IdentityDTO, reviewDto: PostReviewDTO)=>{
    try{
    const bookModel = await BookModel.findById(identityDto.bookId)
    const userModel =await UserModel.findById(identityDto.userId)


    if(!bookModel || !userModel){
        throw new UnprocessableEntityError("Book id and user id doesn't match");
    }else {
        const reviewModel = new ReviewModel({
            review : reviewDto.review,
            rating: reviewDto.rating,
            book_id: identityDto.bookId,
            user_id: identityDto.userId,
        })
        await reviewModel.save();

        bookModel.reviews.push(reviewModel._id)
        userModel.reviews.push(reviewModel._id)
        await bookModel.save()
        await userModel.save()

        return 'Review added successfully.'
    }
    }catch (error){
        throw new UnprocessableEntityError('Failed to add review');
    }

}