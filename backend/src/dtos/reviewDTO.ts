import {IsDefined, IsInt, MinLength} from "class-validator";

export class PostReviewDTO {
    @IsDefined()
    id!:string
    @IsDefined()
    @MinLength(50, {message: "Review should be at least 50 characters"})
    review!: string
    @IsDefined()
    @IsInt({message: "Rate should be a valid number!"})
    rating!: number;
}
export class ReviewDTO{
    @IsDefined()
    id!:string
    @IsDefined()
    @MinLength(50, {message: "Review should be at least 50 characters"})
    review!: string
    @IsDefined()
    @IsInt({message: "Rate should be a valid number!"})
    rating!: number;
}

export class UserReviewDTO{
    @IsDefined()
    id!:string
    @IsDefined()
    @MinLength(50, {message: "Review should be at least 50 characters"})
    review!: string
    @IsDefined()
    @IsInt({message: "Rate should be a valid number!"})
    rating!: number;
    @IsDefined()
    username!:string;
}

export class ReviewBookDTO{
    @IsDefined()
    @MinLength(50, {message: "Review should be at least 50 characters"})
    review!: string
    @IsDefined()
    @IsInt({message: "Rate should be a valid number!"})
    rating!: number;
    @IsDefined()
    username!:string;

    constructor(data: Partial<UserReviewDTO>) {
        Object.assign(this, data);
    }
}
export class IdentityDTO {
    @IsDefined()
    bookId!:string
    @IsDefined()
    userId!:string
}

export class PatchReviewDTO {
    @IsDefined()
    review?:string;
    @IsDefined()
    rating?:number;
}