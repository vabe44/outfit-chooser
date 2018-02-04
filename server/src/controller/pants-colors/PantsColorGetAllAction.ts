import {Request, Response} from "express";
import {getManager} from "typeorm";
import {PantsColor} from "../../entity/PantsColor";

/**
 * Loads all posts from the database.
 */
export async function pantsColorGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const PantsColorRepository = getManager().getRepository(PantsColor);

    // load a post by a given post id
    const pantsColors = await PantsColorRepository.find();

    // return loaded posts
    response.send(pantsColors);
}