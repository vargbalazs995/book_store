import {Request, Response,NextFunction} from "express";
import {plainToInstance} from "class-transformer";
import {validate, ValidationError} from "class-validator";

export function validationMiddleware<T>(type: any): (req: Request, res: Response, next: NextFunction) => Promise<void> {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        const dto = plainToInstance(type, req.body);
        const errors: ValidationError[] = await validate(dto);

        if (errors.length > 0) {
            res.status(400).json(errors);
        } else {
            req.body = dto;
            next();
        }
    };
}