import {IsDefined, IsEmail, IsNotEmpty} from "class-validator";

export class UserDTO {
    @IsDefined()
    @IsNotEmpty()
    username!: string
    @IsDefined()
    @IsNotEmpty()
    password!: string
    @IsDefined()
    @IsNotEmpty()
    @IsEmail()
    email!: string
}
