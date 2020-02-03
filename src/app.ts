
var express = require('express');
import * as bodyParser from "body-parser";
import { UserRoutes } from "./routes/userRoutes";
import { MoodRoutes } from "./routes/moodRoutes";

class App {
    public app = express();
    public userRoutes: UserRoutes = new UserRoutes();
    public moodRoutes: MoodRoutes = new MoodRoutes();

    constructor() {
        this.config();   
        this.userRoutes.routes(this.app);          
        this.moodRoutes.routes(this.app);
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;