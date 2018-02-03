import {Request, Response} from "express";
import {getManager} from "typeorm";
import {SkinTone} from "../../entity/SkinTone";

/**
 * Loads all posts from the database.
 */
export async function skinToneGetAllAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const skinToneRepository = getManager().getRepository(SkinTone);

    // load a post by a given post id
    const skinTones = await skinToneRepository.find();

    // return loaded posts
    response.send(skinTones);
}