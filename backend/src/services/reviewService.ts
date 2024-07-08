import {IdentityDTO, PatchReviewDTO, PostReviewDTO, ReviewBookDTO, ReviewDTO} from "../dtos";
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

export const getReviewsByBookId = async (bookId: string): Promise<any[]> => {
    try {
        return await ReviewModel.find({ book_id: bookId }).lean().exec();
    } catch (error) {
        throw new Error('Error fetching reviews');
    }
};

export const enrichReviewsWithUsernames = async (reviews: any[]): Promise<ReviewBookDTO[]> => {
    try {
        const userIds = reviews.map(review => review.user_id);
        const users = await UserModel.find({ _id: { $in: userIds } }).lean().exec();

        return reviews.map(review => {
            const user = users.find(user => user._id.toString() === review.user_id.toString());

            return new ReviewBookDTO({
                review: review.review,
                rating: review.rating,
                username: user ? user.username : 'Unknown User'
            });
        });
    } catch (error) {
        throw new Error('Error enriching reviews with usernames');
    }
};

export const updateReview = async (review: ReviewDTO, userId: string) => {
    try {
        const reviewModel = await ReviewModel.findById(review.id);

        if (!reviewModel) {
            throw new Error('Review not found');
        }

        const userModel = await UserModel.findById(userId).lean().exec();

        if (!userModel) {
            throw new Error('User not found');
        }

        const hasReview = userModel.reviews.toString().includes(review.id);

        if (!hasReview) {
            throw new Error('User does not have permission to update this review');
        }

        const patchReviewDto: PatchReviewDTO= {
            review :  review.review,
            rating : review.rating,
        }

        return await ReviewModel.findByIdAndUpdate(review.id, patchReviewDto)
    } catch (error) {
        console.error(error);
        throw new Error('Error updating review');
    }
};

export const deleteReview = async (reviewId : string, userId: string) => {
    try {
        const reviewModel = await ReviewModel.findById(reviewId);

        if (!reviewModel) {
            throw new Error('Review not found');
        }

        const userModel = await UserModel.findById(userId).lean().exec();

        if (!userModel) {
            throw new Error('User not found');
        }

        const hasReview = userModel.reviews.toString().includes(reviewId);

        if (!hasReview) {
            throw new Error('User does not have permission to delete this review');
        }

        await ReviewModel.findByIdAndDelete(reviewId);
        return "Review deleted successfully"
    } catch (error) {
        console.error(error);
        throw new Error('Error deleting review');
    }
};