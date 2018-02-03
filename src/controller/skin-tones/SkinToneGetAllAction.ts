import {Request, Response} from "express";
import {getManager} from "typeorm";
import {SkinTone} from "../../entity/skin_tones";
import {skin_shirt} from "../../entity/skin_shirt";

/**
 * Loads all posts from the database.
 */
export async function skinToneGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const skinToneRepository = getManager().getRepository(skin_shirt);

    // load a post by a given post id
    const skin_shirts = await skinToneRepository.find();

    // return loaded posts
    response.send(skin_shirts);
}