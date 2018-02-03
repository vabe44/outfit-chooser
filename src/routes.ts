import {postGetAllAction} from "./controller/posts/PostGetAllAction";
import {postGetByIdAction} from "./controller/posts/PostGetByIdAction";
import {postSaveAction} from "./controller/posts/PostSaveAction";

import {skinToneGetAllAction} from "./controller/skin-tones/SkinToneGetAllAction";
import {skinToneGetByIdAction} from "./controller/skin-tones/SkinToneGetByIdAction";
import {skinToneSaveAction} from "./controller/skin-tones/SkinToneSaveAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/posts",
        method: "get",
        action: postGetAllAction
    },
    {
        path: "/posts/:id",
        method: "get",
        action: postGetByIdAction
    },
    {
        path: "/posts",
        method: "post",
        action: postSaveAction
    },

    {
        path: "/skin-tones",
        method: "get",
        action: skinToneGetAllAction
    },
    {
        path: "/skin-tones/:id",
        method: "get",
        action: skinToneGetByIdAction
    },
    {
        path: "/skin-tones",
        method: "post",
        action: skinToneSaveAction
    },
];