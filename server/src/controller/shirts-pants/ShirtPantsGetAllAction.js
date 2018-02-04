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
const ShirtPants_1 = require("../../entity/ShirtPants");
/**
 * Loads all posts from the database.
 */
function shirtPantsGetAllAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        let shirtPants = [];
        const shirtColor = request.query.shirtColor;
        const pantsColor = request.query.pantsColor;
        // get a post repository to perform operations with post
        const skinShirtRepository = typeorm_1.getManager().getRepository(ShirtPants_1.ShirtPants);
        if (shirtColor) {
            shirtPants = yield skinShirtRepository.find({ shirt_color_id: shirtColor });
        }
        else if (shirtColor) {
            shirtPants = yield skinShirtRepository.find({ pant_color_id: pantsColor });
        }
        else {
            shirtPants = yield skinShirtRepository.find();
        }
        // return loaded posts
        response.send(shirtPants);
    });
}
exports.shirtPantsGetAllAction = shirtPantsGetAllAction;
//# sourceMappingURL=ShirtPantsGetAllAction.js.map