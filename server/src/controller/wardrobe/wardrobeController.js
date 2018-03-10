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
        try {
            const token = request.headers.authorization.toString().replace('Bearer ', '');
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const outfits = yield Outfit_1.Outfit.find({ user: decodedToken.id });
            response.json(outfits);
        }
        catch (err) {
            console.log(err);
            response.status(400).json({ message: 'Failed to get outfits. Please try again.' });
        }
    });
}
exports.get = get;
function getOne(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = request.headers.authorization.toString().replace('Bearer ', '');
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const outfit = yield Outfit_1.Outfit.findOne({ user: decodedToken.id, id: request.params.id });
            response.json(outfit);
        }
        catch (err) {
            console.log(err);
            response.status(400).json({ message: 'Failed to get outfit. Please try again.' });
        }
    });
}
exports.getOne = getOne;
function put(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = request.headers.authorization.toString().replace('Bearer ', '');
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const outfit = yield Outfit_1.Outfit.findOne({ user: decodedToken.id, id: request.body.id });
            outfit.name = request.body.name;
            outfit.shirt = request.body.shirt;
            outfit.pants = request.body.pants;
            outfit.shoes = request.body.shoes;
            yield outfit.save();
            response.json({ updated: true, message: 'Success! Outfit updated to wardrobe.', outfit: outfit });
        }
        catch (err) {
            console.log(err);
            response.json({ updated: false, message: 'Failed to update outfit. Please try again.' });
        }
    });
}
exports.put = put;
function post(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = request.headers.authorization.toString().replace('Bearer ', '');
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const outfit = new Outfit_1.Outfit();
            outfit.user = decodedToken;
            outfit.shirt = request.body.shirt;
            outfit.pants = request.body.pants;
            outfit.shoes = request.body.shoes;
            outfit.name = request.body.name;
            yield outfit.save();
            response.status(201).json({ saved: true, message: 'Success! Outfit saved to wardrobe.', outfit: outfit });
        }
        catch (err) {
            console.log(err);
            response.status(400).json({ saved: false, message: 'Failed to save outfit. Please try again.' });
        }
    });
}
exports.post = post;
function remove(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = request.headers.authorization.toString().replace('Bearer ', '');
            const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
            const outfit = yield Outfit_1.Outfit.find({ id: request.params.id, user: decodedToken.id });
            yield Outfit_1.Outfit.remove(outfit);
            response.json({ deleted: true, message: 'Success! Outfit removed from wardrobe.' });
        }
        catch (err) {
            console.log(err);
            response.status(400).json({ deleted: false, message: 'Failed to remove outfit. Please try again.' });
        }
    });
}
exports.remove = remove;
//# sourceMappingURL=wardrobeController.js.map