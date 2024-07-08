import {Router} from "express";
import {BookDTO, PostBookDTO, UpdateBookDto} from "../dtos";
import {validation} from "../validation";
import {addNewBook, deleteBook, getAllBooks, getBook, updateBook} from "../services/bookService";
import {validateOrReject} from "class-validator";

export const booksRouter = Router();

booksRouter.post("", async (req, res,next) => {
    const bookDto: PostBookDTO = new PostBookDTO()
    bookDto.title = req.body.title;
    bookDto.description = req.body.description;
    bookDto.author = req.body.author

    let validated;

    try {
        validated = await validation(bookDto);
    }catch (error){
        next(error)
    }

    if(validated){
        try{
            const message = await addNewBook(bookDto);
            res.status(201).json({success:true, message});
        }catch(error){
            next(error)
        }
    }
})

booksRouter.get("", async (req, res,next) => {
    try {
        const books = await getAllBooks();
        res.json(books);
    } catch (error) {
        next(error)
    }
})

booksRouter.get("/:id", async (req, res,next) => {
    try {
        const book:BookDTO = await getBook(req.params.id);
        res.json(book);
    } catch (error) {
        next(error)
    }
})

booksRouter.patch("/:id", async (req, res, next) => {
    const bookDto: UpdateBookDto = req.body

        try {
        await validateOrReject(bookDto);
    } catch (errors) {
        return res.status(400).json({ errors });
    }

    {
        try{
            const message = await updateBook(req.params.id, bookDto);
            res.status(201).json({success:true, message});
        }catch(error){
            next(error)
        }
    }
})

booksRouter.delete("/:id", async (req, res,next) => {
    try {
        const message = await deleteBook(req.params.id);
        res.json(message);
    } catch (error) {
        next(error)
    }
})