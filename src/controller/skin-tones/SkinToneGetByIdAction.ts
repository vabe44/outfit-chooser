import {Request, Response} from "express";
import {getManager} from "typeorm";
import {SkinTone} from "../../entity/skin_tones";

/**
 * Loads post by a given id.
 */
export async function skinToneGetByIdAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const skinToneRepository = getManager().getRepository(SkinTone);

    // load a post by a given post id
    const skinTone = await skinToneRepository.findOneById(request.params.id);

    // if post was not found return 404 to the client
    if (!skinTone) {
        response.status(404);
        response.end();
        return;
    }

    // return loaded post
    response.send(skinTone);
}
