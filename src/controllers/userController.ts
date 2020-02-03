import { Request, Response } from 'express';
import{User} from '../models/user'

export class UserController{
public addNewContact (req: Request, res: Response) {                
        let user : User = req.body;
        console.log(user);
        res.status(200).send({
            message: 'We got User1'
        })
    }
}