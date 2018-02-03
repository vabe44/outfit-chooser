import {Request, Response} from "express";
import {getManager} from "typeorm";
import {SkinShirt} from "../../entity/SkinShirt";

/**
 * Loads all posts from the database.
 */
export async function skinShirtGetAllAction(request: Request, response: Response) {

    let skinShirts:SkinShirt[] = [];
    const skinColor = request.query.skinColor;
    const shirtColor = request.query.shirtColor;

    // get a post repository to perform operations with post
    const skinShirtRepository = getManager().getRepository(SkinShirt);

    if (skinColor) {
        skinShirts = await skinShirtRepository.find({ skin_tone_id: skinColor });
    } else if (shirtColor) {
        skinShirts = await skinShirtRepository.find({ shirt_color_id: shirtColor });
    } else {
        skinShirts = await skinShirtRepository.find();
    }

    // return loaded posts
    response.send(skinShirts);
}