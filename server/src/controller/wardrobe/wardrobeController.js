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
const Outfit_1 = require("../../entity/Outfit");
const jwt = require("jsonwebtoken");
function get(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = request.headers.authorization.toString().replace('Bearer ', '');
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const outfits = yield Outfit_1.Outfit.find({ user: decodedToken.id });
            console.log(outfits);
            response.json(outfits);
        }
        catch (err) {
            console.log(err);
            response.status(400).json({ message: 'Failed to get outfits. Please try again.' });
        }
    });
}
exports.get = get;
function post(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = request.headers.authorization.toString().replace('Bearer ', '');
        try {
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const outfit = new Outfit_1.Outfit();
            outfit.user = decodedToken.id;
            outfit.shirt = request.body.shirt.id;
            outfit.pants = request.body.pants.id;
            outfit.shoes = request.body.shoes.id;
            outfit.name = request.body.name;
            yield outfit.save();
            response.status(201).json({ message: 'Success! Outfit saved to wardrobe.' });
        }
        catch (err) {
            console.log(err);
            response.status(400).json({ message: 'Failed to save outfit. Please try again.' });
        }
    });
}
exports.post = post;
//# sourceMappingURL=wardrobeController.js.map