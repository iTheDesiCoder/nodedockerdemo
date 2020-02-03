import {Request, Response} from "express";
import {UserController} from "../controllers/usercontroller";

export class UserRoutes {    
    public userController :UserController = new UserController();
    
    public routes(app:any): void {          
        
        app.route('/user/')
        .post(this.userController.addNewContact)
        
        app.route('/user/:userID')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
    }
}