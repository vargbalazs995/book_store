import {RegisterDTO, LoginDTO} from "../dtos";
import {UserModel} from "../entities/userEntity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {JWT_SECRET, SALT_ROUNDS} from "../configuration";
import {BadRequestError} from "../errors";

export const register = async (registerDTO: RegisterDTO) => {
    const registerUserDto = registerDTO
    const checkUser = await UserModel.findOne({username: registerDTO.username})

    if (checkUser) {
        throw new BadRequestError('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(registerUserDto.password, Number(SALT_ROUNDS));

    const newUser = new UserModel({
        username: registerDTO.username,
        password: hashedPassword,
        email: registerDTO.email,
    });
    await newUser.save();
    return jwt.sign({ id: newUser._id, username: newUser.username }, JWT_SECRET, { expiresIn: '1h' });
}

export const login= async(loginDTO:LoginDTO)=>{
    const user = await UserModel.findOne({ username: loginDTO.username });

    if (!user) {
        return "Username doesn't exist"
    }

    const passwordMatch = await bcrypt.compare(loginDTO.password, user.password);
    if (!passwordMatch) {
        return "The password doesn't match";
    }
    return jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
}
