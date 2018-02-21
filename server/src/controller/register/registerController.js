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
/**
 * Saves new user to DB
 */
function post(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = new User_1.User();
        user.username = request.body.username;
        user.email = request.body.email;
        user.password = request.body.password;
        yield user.save();
        response.json(user);
    });
}
exports.post = post;
//# sourceMappingURL=registerController.js.map