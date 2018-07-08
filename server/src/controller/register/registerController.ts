import { Request, Response } from "express";
import { User } from "../../entity/User";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export async function post(request: Request, response: Response) {

    const user = new User();
    user.username = request.body.username;
    user.email = request.body.email;
    user.password = await bcrypt.hash(request.body.password, 10);
    await user.save();

    if (user.id) {
        let payload = {
            id: user.id,
            email: user.email,
            username: user.username
        };
        let token = jwt.sign(payload, process.env.JWT_SECRET);
        response.json({ message: "ok", token: token });
    } else {
        response.json({ message: "error" });
    }
}