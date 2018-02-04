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
const PantsShoes_1 = require("../../entity/PantsShoes");
/**
 * Loads all posts from the database.
 */
function pantsShoesGetAllAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        let pantsShoes = [];
        const pantsColor = request.query.pantsColor;
        const shoesColor = request.query.shoesColor;
        // get a post repository to perform operations with post
        const skinShirtRepository = typeorm_1.getManager().getRepository(PantsShoes_1.PantsShoes);
        if (pantsColor) {
            pantsShoes = yield skinShirtRepository.find({ pant_color_id: pantsColor });
        }
        else if (pantsColor) {
            pantsShoes = yield skinShirtRepository.find({ shoe_color_id: shoesColor });
        }
        else {
            pantsShoes = yield skinShirtRepository.find();
        }
        // return loaded posts
        response.send(pantsShoes);
    });
}
exports.pantsShoesGetAllAction = pantsShoesGetAllAction;
//# sourceMappingURL=PantsShoesGetAllAction.js.map