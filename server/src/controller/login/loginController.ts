import {Request, Response} from "express";
import { User } from "../../entity/User";
import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

export async function post(request: Request, response: Response) {

    const user = await User.findOne({ email: request.body.email });
    if( !user ){
        response.status(401).json({message:"no such user found"});
    }

    const match = await bcrypt.compare(request.body.password, user.password);
    if( match ) {
        // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
        let payload = {
            id: user.id,
            email: user.email,
            username: user.username
        };
        let token = jwt.sign(payload, process.env.JWT_SECRET);
        response.json({ message: "ok", token: token });
    } else {
        response.json({ message:"passwords did not match" });
    }
}