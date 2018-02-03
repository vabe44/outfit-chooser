import {Request, Response} from "express";
import {getManager} from "typeorm";
import {SkinShirt} from "../../entity/SkinShirt";

/**
 * Loads all posts from the database.
 */
export async function skinShirtGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const skinShirtRepository = getManager().getRepository(SkinShirt);

    // load a post by a given post id
    const skinShirts = await skinShirtRepository.find();

    // return loaded posts
    response.send(skinShirts);
}