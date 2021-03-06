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
const User_1 = require("../../entity/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
function post(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield User_1.User.findOne({ email: request.body.email });
        if (!user) {
            response.status(401).json({ message: "no such user found" });
        }
        const match = yield bcrypt.compare(request.body.password, user.password);
        if (match) {
            // from now on we'll identify the user by the id and the id is the only personalized value that goes into our token
            let payload = {
                id: user.id,
                email: user.email,
                username: user.username
            };
            let token = jwt.sign(payload, process.env.JWT_SECRET);
            response.json({ message: "ok", token: token });
        }
        else {
            response.json({ message: "passwords did not match" });
        }
    });
}
exports.post = post;
//# sourceMappingURL=loginController.js.map