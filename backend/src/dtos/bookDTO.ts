import {IsDefined, IsOptional} from "class-validator";
import {ReviewDTO} from "./reviewDTO";

export class BookDTO {
    @IsDefined()
    _id!: string;
    @IsDefined()
    title!: string
    @IsDefined()
    description!: string
    @IsDefined()
    author!: string
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