import { Request, Response } from 'express';
import{User} from '../models/user'

export class UserController{
public addNewUser (req: Request, res: Response) {                
        let user : User = req.body;
        console.log(user.firstName);
        res.status(200).send(user);
    }
}