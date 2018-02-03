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
const SkinTone_1 = require("../../entity/SkinTone");
/**
 * Saves given post.
 */
function skinToneSaveAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        // get a post repository to perform operations with post
        const skinToneRepository = typeorm_1.getManager().getRepository(SkinTone_1.SkinTone);
        // create a real post object from post json object sent over http
        const newSkinTone = skinToneRepository.create(request.body);
        // save received post
        yield skinToneRepository.save(newSkinTone);
        // return saved post back
        response.send(newSkinTone);
    });
}
exports.skinToneSaveAction = skinToneSaveAction;
//# sourceMappingURL=SkinToneSaveAction.js.map