import { Request, Response } from "express";
import { Outfit } from "../../entity/Outfit";
import * as jwt from "jsonwebtoken";

export async function get(request: Request, response: Response) {
    try {
        const token = request.headers.authorization.toString().replace('Bearer ', '');
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const outfits = await Outfit.find({ user: decodedToken.id });
        response.json(outfits);
    } catch(err) {
        console.log(err);
        response.status(400).json({ message: 'Failed to get outfits. Please try again.' });
    }
}

export async function post(request: Request, response: Response) {
    try {
        const token = request.headers.authorization.toString().replace('Bearer ', '');
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const outfit = new Outfit();
        outfit.user = decodedToken.id;
        outfit.shirt = request.body.shirt.id;
        outfit.pants = request.body.pants.id;
        outfit.shoes = request.body.shoes.id;
        outfit.name = request.body.name;
        await outfit.save();

        response.status(201).json({ message: 'Success! Outfit saved to wardrobe.'});
    } catch(err) {
        console.log(err);
        response.status(400).json({ message: 'Failed to save outfit. Please try again.' });
    }
}

export async function remove(request: Request, response: Response) {
    try {
        const token = request.headers.authorization.toString().replace('Bearer ', '');
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const outfit = await Outfit.find({ id: request.params.id, user: decodedToken.id });
        await Outfit.remove(outfit);
        response.json({ message: 'Success! Outfit removed from wardrobe.'});
    } catch(err) {
        console.log(err);
        response.status(400).json({ message: 'Failed to remove outfit. Please try again.' });
    }
}