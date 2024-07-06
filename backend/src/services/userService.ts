import {CreateAccountDTO, LoginUserDTO} from "../dtos";
import {UserModel} from "../entities/userEntity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {JWT_SECRET} from "../configuration";

const saltRounds = 10;
const jwtSecret = JWT_SECRET;


export const createAccount= async(createAccountDto: CreateAccountDTO) => {
    const registerUseDto = createAccountDto
    const checkUser = await UserModel.find({username: createAccountDto.username})
    if (checkUser) {
        //implenet error handling
    }
    const hashedPassword = await bcrypt.hash(registerUseDto.password, saltRounds);

    const newUser = new UserModel({
        username: createAccountDto.username,
        password: hashedPassword,
        email: createAccountDto.email,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id, username: newUser.username }, jwtSecret, { expiresIn: '1h' });

    return token;
}

export const loginUser= async(loginUserDTO:LoginUserDTO)=>{
    const user = await UserModel.findOne({ username: loginUserDTO.username });

    if (!user) {
        return "Username doesn't exist"
    }

    const passwordMatch = await bcrypt.compare(loginUserDTO.password, user.password);
    if (!passwordMatch) {
        return "The password doesn't match";
    }

    const token = jwt.sign({ id: user._id, username: user.username }, jwtSecret, { expiresIn: '1h' });

    return token;

}