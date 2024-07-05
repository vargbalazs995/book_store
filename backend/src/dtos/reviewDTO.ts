import {IsDefined, IsInt, MinLength} from "class-validator";

export class ReviewDTO {
    @IsDefined()
    @MinLength(50, {message: "Review should be at least 50 characters"})
    review!: string
    @IsDefined()
    @IsInt({message: "Rate should be a valid number!"})
    rating!: number;

}