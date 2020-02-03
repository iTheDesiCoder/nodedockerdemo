
var express = require('express');
import * as bodyParser from "body-parser";
import { UserRoutes } from "./routes/userRoutes";

class App {
    public app = express();
    public userRoutes: UserRoutes = new UserRoutes();

    constructor() {
        this.config();   
        this.userRoutes.routes(this.app);          
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;