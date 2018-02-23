"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const ShirtColor_1 = require("./ShirtColor");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const PantsColor_1 = require("./PantsColor");
const ShoeColor_1 = require("./ShoeColor");
let Outfit = class Outfit extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Outfit.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(type => ShirtColor_1.ShirtColor, { eager: true }),
    typeorm_1.JoinColumn({ name: 'shirt' }),
    __metadata("design:type", ShirtColor_1.ShirtColor)
], Outfit.prototype, "shirt", void 0);
__decorate([
    typeorm_1.OneToOne(type => PantsColor_1.PantsColor, { eager: true }),
    typeorm_1.JoinColumn({ name: 'pants' }),
    __metadata("design:type", PantsColor_1.PantsColor)
], Outfit.prototype, "pants", void 0);
__decorate([
    typeorm_1.OneToOne(type => ShoeColor_1.ShoeColor, { eager: true }),
    typeorm_1.JoinColumn({ name: 'shoes' }),
    __metadata("design:type", ShoeColor_1.ShoeColor)
], Outfit.prototype, "shoes", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Outfit.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.User, user => user.outfits),
    typeorm_1.JoinColumn({ name: 'user' }),
    __metadata("design:type", User_1.User)
], Outfit.prototype, "user", void 0);
Outfit = __decorate([
    typeorm_1.Entity()
], Outfit);
exports.Outfit = Outfit;
//# sourceMappingURL=Outfit.js.map