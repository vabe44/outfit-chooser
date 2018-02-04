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
const ShirtColor_1 = require("./ShirtColor");
const PantsColor_1 = require("./PantsColor");
let ShirtPants = class ShirtPants {
};
__decorate([
    typeorm_1.Column("int", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], ShirtPants.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => ShirtColor_1.ShirtColor, shirt_color_id => shirt_color_id.shirt_pants, {
        eager: true
    }),
    typeorm_1.JoinColumn({ name: 'shirt_color_id' }),
    __metadata("design:type", ShirtColor_1.ShirtColor)
], ShirtPants.prototype, "shirt_color_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => PantsColor_1.PantsColor, pant_color_id => pant_color_id.shirt_pants, {
        eager: true
    }),
    typeorm_1.JoinColumn({ name: 'pant_color_id' }),
    __metadata("design:type", PantsColor_1.PantsColor)
], ShirtPants.prototype, "pant_color_id", void 0);
ShirtPants = __decorate([
    typeorm_1.Entity("shirt_pant"),
    typeorm_1.Index("fk_shirt_color2_idx", ["shirt_color_id",]),
    typeorm_1.Index("fk_pant_color_idx", ["pant_color_id",])
], ShirtPants);
exports.ShirtPants = ShirtPants;
//# sourceMappingURL=ShirtPants.js.map