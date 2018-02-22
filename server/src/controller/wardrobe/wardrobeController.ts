import { Request, Response } from "express";
import { Outfit } from "../../entity/Outfit";
import * as jwt from "jsonwebtoken";

export async function post(request: Request, response: Response) {

    const token = request.headers.authorization.toString().replace('Bearer ', '');

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const outfit = new Outfit();
        outfit.user = decodedToken.id;
        outfit.shirt = request.body.shirt.id;
        outfit.pants = request.body.pants.id;
        outfit.shoes = request.body.shoes.id;
        await outfit.save();

        response.status(201).json({ message: 'Success! Outfit saved to wardrobe.'});

    } catch(err) {
        console.log(err);
        response.status(400).json({ message: 'Failed to save outfit. Please try again.' });
    }
}