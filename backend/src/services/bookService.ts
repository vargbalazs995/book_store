import {BookDTO, UpdateBookDto} from "../dtos";
import {BookModel} from "../entities/bookEntity";
import {UnprocessableEntityError} from "../errors/UnorocessableEntityError";

const mapBookToDto = (book: any):BookDTO =>{
    const bookDto = new BookDTO();
    bookDto.title = book.title
    bookDto.description= book.description
    bookDto.author=book.author
    bookDto.reviews=book.reviews
    return bookDto
}

export const getAllBooks = async()=> {
    const books : BookDTO[] = []
    const bookModel = await BookModel.find()

    bookModel.forEach((book) => {
        const bookDTO = mapBookToDto(book)
        books.push(bookDTO);
    });
    return books;
}

export const getBook = async (id:string) => {
    const bookModel = await BookModel.findById(id)
    return mapBookToDto(bookModel)
}

export const addNewBook = async (bookDto: BookDTO)=>{
    const bookModel = new BookModel(bookDto)

    const bookCheck = await BookModel.find({'title': bookModel.title})

    if(bookCheck){
        throw new UnprocessableEntityError("Book already exists");
    }else {
        await bookModel.save();
        return "book";
    }
}

export const deleteBook = async (id:string) => {
    const bookModel = await BookModel.findById(id)

    if(!bookModel){
        throw new UnprocessableEntityError("Book doesn't exists");
    }else {
        await bookModel.deleteOne({'id':id});
        await bookModel.save();
    }
}

export const updateBook = async (id: string, bookDto:UpdateBookDto)=>{
    const bookModel = await BookModel.findByIdAndUpdate(id, bookDto, {new: true, runValidators:true})
}