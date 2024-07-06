import {Router} from "express";
import {CreateAccountDTO, LoginUserDTO} from "../dtos";
import {createAccount, loginUser} from "../services/userService";
import {validateOrReject} from "class-validator";


export const usersRouter = Router();

usersRouter.post("", async (req, res,next) => {
const registerUser: CreateAccountDTO = req.body;

  try {
      await validateOrReject(registerUser);
      const message = await createAccount(registerUser);
      res.status(201).json({message});
  }catch (error){
      return res.status(400).json({error: error});
  }
})
usersRouter.post("/login", async (req, res,next) => {
    const loginUserDTO: LoginUserDTO = req.body;
    try{
        await validateOrReject(loginUserDTO)

    }catch (error){
        next(error)
    }

    try{
        const token: string = await loginUser(loginUserDTO);
        res.status(200).json({ token });
    }catch (error){
        next(error)
        res.status(500).json({ error: error });
    }
})

usersRouter.post("/me", async (req, res,next) => {})
