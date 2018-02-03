"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const SkinShirt_1 = require("../../entity/SkinShirt");
/**
 * Loads all posts from the database.
 */
function skinShirtGetAllAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        // get a post repository to perform operations with post
        const skinShirtRepository = typeorm_1.getManager().getRepository(SkinShirt_1.SkinShirt);
        // load a post by a given post id
        const skinShirts = yield skinShirtRepository.find();
        // return loaded posts
        response.send(skinShirts);
    });
}
exports.skinShirtGetAllAction = skinShirtGetAllAction;
//# sourceMappingURL=SkinShirtGetAllAction.js.map