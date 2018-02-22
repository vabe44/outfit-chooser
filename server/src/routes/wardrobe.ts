import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export async function post(request: Request, response: Response) {

    console.log(request.body);
    response.json('nice');
}