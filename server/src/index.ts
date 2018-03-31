require('dotenv').config();
import "reflect-metadata";
import {createConnection} from "typeorm";
import {Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as path from 'path';
import * as cors from "cors";
import * as passport from "passport";
import {AppRoutes} from "./routes";

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(passport.initialize());

    // parse application/x-www-form-urlencoded
    // for easier testing with Postman or plain HTML forms
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, '../../', process.env.CLIENT_PATH)));

    const corsOptions = {
        origin: process.env.CLIENT_URL_FOR_CORS,
        credentials: true,
    }
    //here is the magic
    app.use(cors(corsOptions));

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../../', process.env.CLIENT_PATH, '/index.html'));
	})

    // run app
    app.listen(process.env.PORT);

    console.log("Express application is up and running on port " + process.env.PORT);

}).catch(error => console.log("TypeORM connection error: ", error));
