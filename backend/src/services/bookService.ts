import {BookDTO} from "../dtos";
import {BookModel} from "../entities/bookEntity";
import {UnprocessableEntityError} from "../errors/UnorocessableEntityError";


export const addNewBook = async (bookDto: BookDTO)=>{
    const book = new BookModel(bookDto)

    const bookCheck = await BookModel.find({'title': book.title})

    if(!bookCheck){
        throw new UnprocessableEntityError("Book already exists");
    }else {
        await book.save();
        return "book";
    }
}