import {IsDefined, IsOptional} from "class-validator";
import {ReviewDTO} from "./reviewDTO";

export class BookDTO {
    @IsDefined()
    title!: string
    @IsDefined()
    description!: string
    @IsDefined()
    author!: string
    @IsOptional()
    reviews!: ReviewDTO[];
}