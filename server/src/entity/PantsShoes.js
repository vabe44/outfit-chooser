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
const PantsColor_1 = require("./PantsColor");
const ShoeColor_1 = require("./ShoeColor");
let PantsShoes = class PantsShoes {
};
__decorate([
    typeorm_1.Column("int", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], PantsShoes.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => PantsColor_1.PantsColor, pant_color_id => pant_color_id.pant_shoes),
    typeorm_1.JoinColumn({ name: 'pant_color_id' }),
    __metadata("design:type", PantsColor_1.PantsColor)
], PantsShoes.prototype, "pant_color_id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => ShoeColor_1.ShoeColor, shoe_color_id => shoe_color_id.pant_shoes),
    typeorm_1.JoinColumn({ name: 'shoe_color_id' }),
    __metadata("design:type", ShoeColor_1.ShoeColor)
], PantsShoes.prototype, "shoe_color_id", void 0);
PantsShoes = __decorate([
    typeorm_1.Entity("pant_shoe"),
    typeorm_1.Index("fk_pant_color2_idx", ["pant_color_id",]),
    typeorm_1.Index("fk_shoe_color_idx", ["shoe_color_id",])
], PantsShoes);
exports.PantsShoes = PantsShoes;
//# sourceMappingURL=PantsShoes.js.map