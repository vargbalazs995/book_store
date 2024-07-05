import {Router} from "express";

export const reviewsRouter = Router();

reviewsRouter.post("/books/:bookId/reviews", async (req, res) => {})
reviewsRouter.get('/books/:bookId/reviews', async (req, res) => {})
reviewsRouter.patch("/reviews/:id", async (req, res) => {})
reviewsRouter.delete("/reviews/:id", async (req, res) => {})