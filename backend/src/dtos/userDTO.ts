import {IsDefined, IsEmail, IsNotEmpty} from "class-validator";

export class CreateAccountDTO {
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

export class LoginUserDTO{
    @IsDefined()
    @IsNotEmpty()
    username!:string
    @IsDefined()
    @IsNotEmpty()
    password!:string
}
