import {Router} from "express";

export const usersRouter = Router();

usersRouter.post("/users", async (req, res) => {})
usersRouter.post("/users/login", async (req, res) => {})
usersRouter.get("/users/me", async (req, res) => {})
