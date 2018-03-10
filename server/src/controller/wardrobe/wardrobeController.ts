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

export async function getOne(request: Request, response: Response) {
    try {
        const token = request.headers.authorization.toString().replace('Bearer ', '');
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const outfit = await Outfit.findOne({ user: decodedToken.id, id: request.params.id });
        response.json(outfit);
    } catch(err) {
        console.log(err);
        response.status(400).json({ message: 'Failed to get outfit. Please try again.' });
    }
}

export async function put(request: Request, response: Response) {
    try {
        const token = request.headers.authorization.toString().replace('Bearer ', '');
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const outfit = await Outfit.findOne({ user: decodedToken.id, id: request.body.id });
        outfit.name = request.body.name;
        outfit.shirt = request.body.shirt;
        outfit.pants = request.body.pants;
        outfit.shoes = request.body.shoes;
        await outfit.save();

        response.json({ updated: true, message: 'Success! Outfit updated to wardrobe.', outfit: outfit });
    } catch(err) {
        console.log(err);
        response.json({ updated: false, message: 'Failed to update outfit. Please try again.' });
    }
}

export async function post(request: Request, response: Response) {
    try {
        const token = request.headers.authorization.toString().replace('Bearer ', '');
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        const outfit = new Outfit();
        outfit.user = decodedToken;
        outfit.shirt = request.body.shirt;
        outfit.pants = request.body.pants;
        outfit.shoes = request.body.shoes;
        outfit.name = request.body.name;
        await outfit.save();

        response.status(201).json({ saved: true, message: 'Success! Outfit saved to wardrobe.', outfit: outfit });
    } catch(err) {
        console.log(err);
        response.status(400).json({ saved: false, message: 'Failed to save outfit. Please try again.' });
    }
}

export async function remove(request: Request, response: Response) {
    try {
        const token = request.headers.authorization.toString().replace('Bearer ', '');
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const outfit = await Outfit.find({ id: request.params.id, user: decodedToken.id });
        await Outfit.remove(outfit);
        response.json({ deleted: true, message: 'Success! Outfit removed from wardrobe.'});
    } catch(err) {
        console.log(err);
        response.status(400).json({ deleted: false, message: 'Failed to remove outfit. Please try again.' });
    }
}