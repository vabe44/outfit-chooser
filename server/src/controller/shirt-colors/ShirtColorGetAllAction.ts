import {Request, Response} from "express";
import {getManager} from "typeorm";
import {ShirtColor} from "../../entity/ShirtColor";

/**
 * Loads all posts from the database.
 */
export async function shirtColorGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const shirtColorRepository = getManager().getRepository(ShirtColor);

    // load a post by a given post id
    const shirtColors = await shirtColorRepository.find();

    // return loaded posts
    response.send(shirtColors);
}