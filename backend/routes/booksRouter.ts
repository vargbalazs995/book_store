import {Router} from "express";

export const booksRouter = Router();

booksRouter.post("/books", async (req, res) => {})
booksRouter.get("/books", async (req, res) => {})
booksRouter.get("/books/:id", async (req, res) => {})
booksRouter.patch("/books/:id", async (req, res) => {})
booksRouter.delete("/books/:id", async (req, res) => {})