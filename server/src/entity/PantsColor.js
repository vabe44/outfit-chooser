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
const PantsShoes_1 = require("./PantsShoes");
const ShirtPants_1 = require("./ShirtPants");
let PantsColor = class PantsColor {
};
__decorate([
    typeorm_1.Column("int", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], PantsColor.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 45,
        name: "color"
    }),
    __metadata("design:type", String)
], PantsColor.prototype, "color", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 45,
        name: "colorcode"
    }),
    __metadata("design:type", String)
], PantsColor.prototype, "colorcode", void 0);
__decorate([
    typeorm_1.OneToMany(type => PantsShoes_1.PantsShoes, pant_shoes => pant_shoes.pant_color_id),
    __metadata("design:type", Array)
], PantsColor.prototype, "pant_shoes", void 0);
__decorate([
    typeorm_1.OneToMany(type => ShirtPants_1.ShirtPants, shirt_pants => shirt_pants.pant_color_id),
    __metadata("design:type", Array)
], PantsColor.prototype, "shirt_pants", void 0);
PantsColor = __decorate([
    typeorm_1.Entity("pant_colors"),
    typeorm_1.Index("color_UNIQUE", ["color",], { unique: true })
], PantsColor);
exports.PantsColor = PantsColor;
//# sourceMappingURL=PantsColor.js.map