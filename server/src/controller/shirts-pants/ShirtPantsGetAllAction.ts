import {Request, Response} from "express";
import {getManager} from "typeorm";
import {ShirtPants} from "../../entity/ShirtPants";

/**
 * Loads all posts from the database.
 */
export async function shirtPantsGetAllAction(request: Request, response: Response) {

    let shirtPants:ShirtPants[] = [];
    const shirtColor = request.query.shirtColor;
    const pantsColor = request.query.pantsColor;

    // get a post repository to perform operations with post
    const skinShirtRepository = getManager().getRepository(ShirtPants);

    if (shirtColor) {
        shirtPants = await skinShirtRepository.find({ shirt_color_id: shirtColor });
    } else if (shirtColor) {
        shirtPants = await skinShirtRepository.find({ pant_color_id: pantsColor });
    } else {
        shirtPants = await skinShirtRepository.find();
    }

    // return loaded posts
    response.send(shirtPants);
}