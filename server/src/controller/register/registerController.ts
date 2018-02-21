import { Request, Response } from "express";
import { User } from "../../entity/User";

export async function post(request: Request, response: Response) {

    const user = new User();
    user.username = request.body.username;
    user.email = request.body.email;
    user.password = request.body.password;
    await user.save();

    response.json(user);
}