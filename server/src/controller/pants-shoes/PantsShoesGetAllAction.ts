import {Request, Response} from "express";
import {getManager} from "typeorm";
import {PantsShoes} from "../../entity/PantsShoes";

/**
 * Loads all posts from the database.
 */
export async function pantsShoesGetAllAction(request: Request, response: Response) {

    let pantsShoes:PantsShoes[] = [];
    const pantsColor = request.query.pantsColor;
    const shoesColor = request.query.shoesColor;

    // get a post repository to perform operations with post
    const skinShirtRepository = getManager().getRepository(PantsShoes);

    if (pantsColor) {
        pantsShoes = await skinShirtRepository.find({ pant_color_id: pantsColor });
    } else if (pantsColor) {
        pantsShoes = await skinShirtRepository.find({ shoe_color_id: shoesColor });
    } else {
        pantsShoes = await skinShirtRepository.find();
    }

    // return loaded posts
    response.send(pantsShoes);
}