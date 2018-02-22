"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homeController_1 = require("./controller/home/homeController");
const loginController = require("./controller/login/loginController");
const registerController = require("./controller/register/registerController");
const wardrobeController = require("./controller/wardrobe/wardrobeController");
const SkinToneGetAllAction_1 = require("./controller/skin-tones/SkinToneGetAllAction");
const SkinToneGetByIdAction_1 = require("./controller/skin-tones/SkinToneGetByIdAction");
const SkinToneSaveAction_1 = require("./controller/skin-tones/SkinToneSaveAction");
const ShoeColorGetAllAction_1 = require("./controller/shoe-color/ShoeColorGetAllAction");
const SkinShirtGetAllAction_1 = require("./controller/skin-shirts/SkinShirtGetAllAction");
const ShirtColorGetAllAction_1 = require("./controller/shirt-colors/ShirtColorGetAllAction");
const PantsColorGetAllAction_1 = require("./controller/pants-colors/PantsColorGetAllAction");
const ShirtPantsGetAllAction_1 = require("./controller/shirts-pants/ShirtPantsGetAllAction");
const PantsShoesGetAllAction_1 = require("./controller/pants-shoes/PantsShoesGetAllAction");
/**
 * All application routes.
 */
exports.AppRoutes = [
    {
        path: "/index",
        method: "get",
        action: homeController_1.homeController
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
        path: "/api/wardrobe",
        method: "post",
        action: wardrobeController.post
    },
    // PUBLIC DATA API
    {
        path: "/skin-tones",
        method: "get",
        action: SkinToneGetAllAction_1.skinToneGetAllAction
    },
    {
        path: "/skin-tones/:id",
        method: "get",
        action: SkinToneGetByIdAction_1.skinToneGetByIdAction
    },
    {
        path: "/skin-tones",
        method: "post",
        action: SkinToneSaveAction_1.skinToneSaveAction
    },
    {
        path: "/shirt-colors",
        method: "get",
        action: ShirtColorGetAllAction_1.shirtColorGetAllAction
    },
    {
        path: "/pants-colors",
        method: "get",
        action: PantsColorGetAllAction_1.pantsColorGetAllAction
    },
    {
        path: "/shoe-colors",
        method: "get",
        action: ShoeColorGetAllAction_1.shoeColorGetAllAction
    },
    {
        path: "/skin-shirts",
        method: "get",
        action: SkinShirtGetAllAction_1.skinShirtGetAllAction
    },
    {
        path: "/shirt-pants",
        method: "get",
        action: ShirtPantsGetAllAction_1.shirtPantsGetAllAction
    },
    {
        path: "/pants-shoes",
        method: "get",
        action: PantsShoesGetAllAction_1.pantsShoesGetAllAction
    },
];
//# sourceMappingURL=routes.js.map