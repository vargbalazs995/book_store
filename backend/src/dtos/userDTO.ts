import {IsDefined, IsEmail, IsNotEmpty, IsString, } from "class-validator";

export class RegisterDTO {
    @IsDefined()
    @IsNotEmpty()
    @IsString()
    username!: string

    @IsDefined()
    @IsNotEmpty()
    @IsString()
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

export class UserDTO {
    @IsDefined()
    username!: string;
    @IsDefined()
    email!: string;
}