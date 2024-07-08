import {Router} from "express";
import {LoginDTO, RegisterDTO} from "../dtos";
import {register, login} from "../services/usersService";
import {validationMiddleware} from "../middlewares/validationMiddleware";


export const usersRouter = Router();

usersRouter.post("/", validationMiddleware(RegisterDTO), async (req, res) => {
  try {
      const registerDTO: RegisterDTO = req.body;
      const message = await register(registerDTO);
      res.status(201).json({message});
  }catch (error){
      return res.status(400).json({error: error});
  }
});

usersRouter.post("/login", validationMiddleware(LoginDTO), async (req, res, next) => {
    try{
        const LoginDTO: LoginDTO = req.body;
        const token: string = await login(LoginDTO);
        res.status(200).json({ token });
    }catch (error){
        next(error)
        res.status(500).json({ error: error });
    }
});

usersRouter.post("/me", async (req, res,next) => {})
