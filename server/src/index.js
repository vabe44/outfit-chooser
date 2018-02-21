"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const passport = require("passport");
const routes_1 = require("./routes");
// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    // create express app
    const app = express();
    app.use(passport.initialize());
    // parse application/x-www-form-urlencoded
    // for easier testing with Postman or plain HTML forms
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, '../../client/src')));
    const corsOptions = {
        origin: 'http://localhost:4200',
        credentials: true,
    };
    //here is the magic
    app.use(cors(corsOptions));
    // register all application routes
    routes_1.AppRoutes.forEach(route => {
        app[route.method](route.path, (request, response, next) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });
    // run app
    app.listen(3000);
    console.log("Express application is up and running on port 3000");
})).catch(error => console.log("TypeORM connection error: ", error));
//# sourceMappingURL=index.js.map