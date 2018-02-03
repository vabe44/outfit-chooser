import {Request, Response} from "express";
import * as path from 'path';

/**
 * Displays home page
 */
export async function homeController(request: Request, response: Response) {

    response.sendFile(path.join(__dirname, '../../../../client/dist/index.html'));

}