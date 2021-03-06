import {homeController} from "./controller/home/homeController";
import * as loginController from "./controller/login/loginController";
import * as registerController from "./controller/register/registerController";
import * as wardrobeController from "./controller/wardrobe/wardrobeController";

import {skinToneGetAllAction} from "./controller/skin-tones/SkinToneGetAllAction";
import {skinToneGetByIdAction} from "./controller/skin-tones/SkinToneGetByIdAction";
import {skinToneSaveAction} from "./controller/skin-tones/SkinToneSaveAction";
import {shoeColorGetAllAction} from "./controller/shoe-color/ShoeColorGetAllAction";
import {skinShirtGetAllAction} from "./controller/skin-shirts/SkinShirtGetAllAction";
import {shirtColorGetAllAction} from "./controller/shirt-colors/ShirtColorGetAllAction";
import {pantsColorGetAllAction} from "./controller/pants-colors/PantsColorGetAllAction";
import {shirtPantsGetAllAction} from "./controller/shirts-pants/ShirtPantsGetAllAction";
import {pantsShoesGetAllAction} from "./controller/pants-shoes/PantsShoesGetAllAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/index",
        method: "get",
        action: homeController
    },

    // AUTH API
    {
        path: "/login",
        method: "post",
        action: loginController.post
    },
    {
        path: "/register",
        method: "post",
        action: registerController.post
    },

    // WARDROBE API
    {
        path: "/api/wardrobe",
        method: "get",
        action: wardrobeController.get
    },
    {
        path: "/api/wardrobe/:id",
        method: "get",
        action: wardrobeController.getOne
    },
    {
        path: "/api/wardrobe",
        method: "put",
        action: wardrobeController.put
    },
    {
        path: "/api/wardrobe",
        method: "post",
        action: wardrobeController.post
    },
    {
        path: "/api/wardrobe/:id",
        method: "delete",
        action: wardrobeController.remove
    },

    // PUBLIC DATA API
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
        path: "/shirt-colors",
        method: "get",
        action: shirtColorGetAllAction
    },

    {
        path: "/pants-colors",
        method: "get",
        action: pantsColorGetAllAction
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

    {
        path: "/shirt-pants",
        method: "get",
        action: shirtPantsGetAllAction
    },

    {
        path: "/pants-shoes",
        method: "get",
        action: pantsShoesGetAllAction
    },
];