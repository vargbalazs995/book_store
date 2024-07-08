import {Router} from "express";
import {LoginDTO, RegisterDTO} from "../dtos";
import {register, login, getUserData} from "../services/usersService";
import {validationMiddleware} from "../middlewares/validationMiddleware";
import {authMiddleware} from "../middlewares";


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

usersRouter.get("/me",authMiddleware, async (req, res,next) => {
    try{
        //@ts-ignore
        const userId : string =req.userId
        const message = await getUserData(userId)
        res.status(200).json({message});
    }catch (error){
        next(error)
    }
})
