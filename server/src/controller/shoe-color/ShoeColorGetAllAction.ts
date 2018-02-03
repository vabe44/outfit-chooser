import {Request, Response} from "express";
import {getManager} from "typeorm";
import {ShoeColor} from "../../entity/ShoeColor";

/**
 * Loads all posts from the database.
 */
export async function shoeColorGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const shoeColorRepository = getManager().getRepository(ShoeColor);

    // load a post by a given post id
    const shoeColors = await shoeColorRepository.find();

    // return loaded posts
    response.send(shoeColors);
}