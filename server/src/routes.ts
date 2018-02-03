import {postGetAllAction} from "./controller/posts/PostGetAllAction";
import {postGetByIdAction} from "./controller/posts/PostGetByIdAction";
import {postSaveAction} from "./controller/posts/PostSaveAction";
import {homeController} from "./controller/home/homeController";

import {skinToneGetAllAction} from "./controller/skin-tones/SkinToneGetAllAction";
import {skinToneGetByIdAction} from "./controller/skin-tones/SkinToneGetByIdAction";
import {skinToneSaveAction} from "./controller/skin-tones/SkinToneSaveAction";
import { shoeColorGetAllAction } from "./controller/shoe-color/ShoeColorGetAllAction";
import { skinShirtGetAllAction } from "./controller/skin-shirts/SkinShirtGetAllAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/index",
        method: "get",
        action: homeController
    },
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

    {
        path: "/shoe-colors",
        method: "get",
        action: shoeColorGetAllAction
    },

    {
        path: "/skin-shirts",
        method: "get",
        action: skinShirtGetAllAction
    },
];