import {Router} from "express";
import {booksRouter} from "./booksRouter";
import {usersRouter} from "./usersRouter";
import {booksReviewsRouter, reviewsRouter} from "./reviewsRouter";

export const rootRouter = Router();

rootRouter.use("/books", booksRouter, booksReviewsRouter)
rootRouter.use("/users", usersRouter)
rootRouter.use("/reviews", reviewsRouter)