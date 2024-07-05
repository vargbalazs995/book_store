import {Router} from "express";

export const reviewsRouter = Router();
export const booksReviewsRouter = Router();

booksReviewsRouter.post("/:bookId/reviews", async (req, res) => {})
booksReviewsRouter.get('/:bookId/reviews', async (req, res) => {})
reviewsRouter.patch("/:id", async (req, res) => {})
reviewsRouter.delete("/:id", async (req, res) => {})