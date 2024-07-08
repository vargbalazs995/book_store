import {Router} from "express";
import {authMiddleware} from "../middlewares/authMiddleware";
import {IdentityDTO, PostReviewDTO} from "../dtos";
import {addNewReview} from "../services/reviewService";

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

 booksReviewsRouter.get('/:bookId/reviews',authMiddleware, async (req, res,next) => {

     try {

         res.status(201).json({  });
     }catch (error){
         next(error)
     }
 })
reviewsRouter.patch("/:id", async (req, res) => {})
reviewsRouter.delete("/:id", async (req, res) => {})