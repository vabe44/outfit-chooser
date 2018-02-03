"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PostGetAllAction_1 = require("./controller/posts/PostGetAllAction");
const PostGetByIdAction_1 = require("./controller/posts/PostGetByIdAction");
const PostSaveAction_1 = require("./controller/posts/PostSaveAction");
const homeController_1 = require("./controller/home/homeController");
const SkinToneGetAllAction_1 = require("./controller/skin-tones/SkinToneGetAllAction");
const SkinToneGetByIdAction_1 = require("./controller/skin-tones/SkinToneGetByIdAction");
const SkinToneSaveAction_1 = require("./controller/skin-tones/SkinToneSaveAction");
const ShoeColorGetAllAction_1 = require("./controller/shoe-color/ShoeColorGetAllAction");
const SkinShirtGetAllAction_1 = require("./controller/skin-shirts/SkinShirtGetAllAction");
/**
 * All application routes.
 */
exports.AppRoutes = [
    {
        path: "/index",
        method: "get",
        action: homeController_1.homeController
    },
    {
        path: "/posts",
        method: "get",
        action: PostGetAllAction_1.postGetAllAction
    },
    {
        path: "/posts/:id",
        method: "get",
        action: PostGetByIdAction_1.postGetByIdAction
    },
    {
        path: "/posts",
        method: "post",
        action: PostSaveAction_1.postSaveAction
    },
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
        path: "/shoe-colors",
        method: "get",
        action: ShoeColorGetAllAction_1.shoeColorGetAllAction
    },
    {
        path: "/skin-shirts",
        method: "get",
        action: SkinShirtGetAllAction_1.skinShirtGetAllAction
    },
];
//# sourceMappingURL=routes.js.map