import {IsDefined, IsNotEmpty, IsOptional} from "class-validator";
import {ReviewDTO} from "./reviewDTO";

export class BookDTO {
    @IsDefined()
    _id!: string;
    @IsDefined()
    @IsNotEmpty()
    title!: string
    @IsDefined()
    @IsNotEmpty()
    description!: string
    @IsDefined()
    @IsNotEmpty()
    author!: string
    @IsDefined()
    avgRating?: number;
    @IsOptional()
    reviews!: ReviewDTO[];
}

export class UpdateBookDto{
    @IsDefined()
    title?: string
    @IsDefined()
    description?: string
    @IsDefined()
    author?: string
}