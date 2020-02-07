import {Request, Response} from "express";
import {UserController} from "../controllers/userController";

export class UserRoutes {    
    public userController :UserController = new UserController();
    
    public routes(app:any): void {          
        app.route('/user/:name')
        .get((req: Request, res: Response) => { 
            console.log(req.params.name);
            res.status(200).send({
                message: 'Hello ' + req.params.name
            })
        })

        app.route('/user/')
        .post(this.userController.addNewUser)
        
        app.route('/user/:userID')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
    }
}