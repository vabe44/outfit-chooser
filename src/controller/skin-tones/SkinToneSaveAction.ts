import {Request, Response} from "express";
import {getManager} from "typeorm";
import {SkinTone} from "../../entity/skin_tones";

/**
 * Saves given post.
 */
export async function skinToneSaveAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const skinToneRepository = getManager().getRepository(SkinTone);

    // create a real post object from post json object sent over http
    const newSkinTone = skinToneRepository.create(request.body);

    // save received post
    await skinToneRepository.save(newSkinTone);

    // return saved post back
    response.send(newSkinTone);
}