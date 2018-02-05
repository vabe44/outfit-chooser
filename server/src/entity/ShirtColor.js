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
const ShirtPants_1 = require("./ShirtPants");
let ShirtColor = class ShirtColor {
};
__decorate([
    typeorm_1.Column("int", {
        generated: true,
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], ShirtColor.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 45,
        name: "color"
    }),
    __metadata("design:type", String)
], ShirtColor.prototype, "color", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 45,
        name: "colorcode"
    }),
    __metadata("design:type", String)
], ShirtColor.prototype, "colorcode", void 0);
__decorate([
    typeorm_1.OneToMany(type => ShirtPants_1.ShirtPants, shirt_pants => shirt_pants.shirt_color_id),
    __metadata("design:type", Array)
], ShirtColor.prototype, "shirt_pants", void 0);
__decorate([
    typeorm_1.OneToMany(type => ShirtPants_1.ShirtPants, skin_shirts => skin_shirts.shirt_color_id),
    __metadata("design:type", Array)
], ShirtColor.prototype, "skin_shirts", void 0);
ShirtColor = __decorate([
    typeorm_1.Entity("shirt_colors"),
    typeorm_1.Index("color_UNIQUE", ["color",], { unique: true })
], ShirtColor);
exports.ShirtColor = ShirtColor;
//# sourceMappingURL=ShirtColor.js.map