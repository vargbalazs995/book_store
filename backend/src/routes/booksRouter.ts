import {Router} from "express";
import {BookDTO} from "../dtos";
import {validation} from "../validation";
import {addNewBook} from "../services/bookService";

export const booksRouter = Router();

booksRouter.post("", async (req, res,next) => {
    const bookDto: BookDTO = new BookDTO()
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
            res.status(400).json({error:error})
        }
    }
})
booksRouter.get("", async (req, res) => {})
booksRouter.get("/:id", async (req, res) => {})
booksRouter.patch("/:id", async (req, res) => {})
booksRouter.delete("/:id", async (req, res) => {})