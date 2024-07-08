import {Router} from "express";
import {authMiddleware} from "../middlewares";
import {IdentityDTO, PostReviewDTO, ReviewDTO} from "../dtos";
import {
    addNewReview,
    deleteReview,
    enrichReviewsWithUsernames,
    getReviewsByBookId,
    updateReview
} from "../services/reviewService";

export const reviewsRouter = Router();
export const booksReviewsRouter = Router();

booksReviewsRouter.post("/:bookId/reviews",authMiddleware, async (req, res,next) => {
    const identityDto : IdentityDTO = new IdentityDTO();
    identityDto.bookId = req.params.bookId;
    //@ts-ignore
    identityDto.userId=req.userId
    const reviewDto: PostReviewDTO = req.body;

        try {
            const message = await addNewReview(identityDto,reviewDto);
            res.status(201).json({success: true, message});
        } catch (error) {
            next(error)
        }
})

 booksReviewsRouter.get('/:bookId/reviews', async (req, res,next) => {
     const bookId = req.params.bookId;

     try {
         const reviews = await getReviewsByBookId(bookId);
         const message = await enrichReviewsWithUsernames(reviews);
         res.status(200).json({success: true, message});
     } catch (error) {
         next(error);
     }
 })

reviewsRouter.patch("/:id", authMiddleware,async (req, res,next) => {
   try{
    const reviewDto : ReviewDTO = {
    id:req.params.id,
    review:req.body.review,
    rating: req.body.rating}
    //@ts-ignore
    const userId : string =req.userId
    const message =await updateReview(reviewDto, userId);
    res.json(message)
   }catch(error){
       next(error)
   }
})

reviewsRouter.delete("/:id",authMiddleware, async (req, res,next) => {
    try{
        //@ts-ignore
        const userId : string =req.userId
        const message = await deleteReview(req.params.id, userId)
        res.json(message)
    }catch(error){
        next(error)
    }
})