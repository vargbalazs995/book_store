import {BookDTO, PostBookDTO, UpdateBookDto} from "../dtos";
import {BookModel} from "../entities/bookEntity";
import {UnprocessableEntityError} from "../errors";
import {Types} from "mongoose";
import {ReviewModel} from "../entities/reviewEntity";

export const mapBookToDto = (book: any):BookDTO =>{
    const bookDto = new BookDTO();
    bookDto._id = book.id;
    bookDto.title = book.title
    bookDto.description= book.description
    bookDto.author=book.author
    bookDto.avgRating= book.avgRating
    bookDto.reviews=book.reviews
    return bookDto
}

export const getAllBooks = async()=> {
    const books : BookDTO[] = []
    const bookModel = await BookModel.find().exec();

    for(const book of bookModel){
        const avgRating = await averageRatingCalculator(book.reviews)
        const bookDTO = mapBookToDto(book);
        bookDTO.avgRating = avgRating;
        books.push(bookDTO);
    }
    return books;
}

export const getBook = async (id:string) => {
    const bookModel = await BookModel.findById(id)

    return mapBookToDto(bookModel)
}

export const addNewBook = async (bookDto: PostBookDTO)=>{
    const bookModel = new BookModel(bookDto)
    const bookCheck = await BookModel.findOne({title: bookDto.title})

    if(bookCheck){
        throw new UnprocessableEntityError("Book already exists");
    }else {
        await bookModel.save();
        return "Book added successfully";
    }
}

export const deleteBook = async (id:string) => {
    const bookModel = await BookModel.findById(id)

    if(!bookModel){
        throw new UnprocessableEntityError("Book doesn't exists");
    }else {
        await bookModel.deleteOne({'id':id});
        await bookModel.save();
        return "Book deleted successfully";
    }
}

export const updateBook = async (id: string, bookDto:UpdateBookDto)=>{
    const bookModel = await BookModel.findById(id)
    if(!bookModel){
        throw new UnprocessableEntityError("Book doesn't exists");
        } else {
     await BookModel.findByIdAndUpdate(id, bookDto, {new: true, runValidators:true})
        return "Book updated successfully"
        }
}

export const averageRatingCalculator = async(reviews: Types.ObjectId[] )=>{
    if(reviews.length == 0){
        return 0
    }

    let sumOfRates = 0;

    const reviewIds: Types.ObjectId[] = reviews.map(review => review._id);
    const reviewList = await ReviewModel.find({ _id: { $in: reviewIds } }).lean().exec();

    reviewList.forEach((review) => sumOfRates += review.rating);

    return sumOfRates / reviewList.length;
}