import {IsDefined, IsEmail, IsNotEmpty, IsString, Matches} from "class-validator";

export class RegisterDTO {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    username!: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @Matches('/^(?=.*[A-Z])(?=(.*\d){2,}).{8,}$/')
    password!: string

    @IsDefined()
    @IsNotEmpty()
    @IsEmail()
    email!: string
}

export class LoginDTO{
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    username!:string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    password!:string
}
