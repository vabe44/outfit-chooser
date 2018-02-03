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
const typeorm_1 = require("typeorm");
const SkinTone_1 = require("./SkinTone");
const ShirtColor_1 = require("./ShirtColor");
let SkinShirt = class SkinShirt {
};
__decorate([
    typeorm_1.ManyToOne(type => SkinTone_1.SkinTone, skin_tone_id => skin_tone_id.skin_shirts, {
        eager: true
    }),
    typeorm_1.JoinColumn({ name: 'skin_tone_id' }),
    __metadata("design:type", SkinTone_1.SkinTone)
], SkinShirt.prototype, "skin_tone_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => ShirtColor_1.ShirtColor, shirt_color_id => shirt_color_id.skin_shirts, {
        eager: true
    }),
    typeorm_1.JoinColumn({ name: 'shirt_color_id' }),
    __metadata("design:type", ShirtColor_1.ShirtColor)
], SkinShirt.prototype, "shirt_color_id", void 0);
__decorate([
    typeorm_1.Column("int", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], SkinShirt.prototype, "id", void 0);
SkinShirt = __decorate([
    typeorm_1.Entity("skin_shirt"),
    typeorm_1.Index("fk_skin_tone_idx", ["skin_tone_id",]),
    typeorm_1.Index("fk_shirt_color_idx", ["shirt_color_id",])
], SkinShirt);
exports.SkinShirt = SkinShirt;
//# sourceMappingURL=SkinShirt.js.map