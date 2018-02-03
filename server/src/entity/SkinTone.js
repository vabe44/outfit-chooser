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
const SkinShirt_1 = require("./SkinShirt");
let SkinTone = class SkinTone {
};
__decorate([
    typeorm_1.Column("int", {
        nullable: false,
        primary: true,
        name: "id"
    }),
    __metadata("design:type", Number)
], SkinTone.prototype, "id", void 0);
__decorate([
    typeorm_1.Column("varchar", {
        nullable: false,
        length: 45,
        name: "tone"
    }),
    __metadata("design:type", String)
], SkinTone.prototype, "tone", void 0);
__decorate([
    typeorm_1.OneToMany(type => SkinShirt_1.SkinShirt, skin_shirts => skin_shirts.skin_tone_id),
    __metadata("design:type", Array)
], SkinTone.prototype, "skin_shirts", void 0);
SkinTone = __decorate([
    typeorm_1.Entity("skin_tones"),
    typeorm_1.Index("id_UNIQUE", ["id",], { unique: true })
], SkinTone);
exports.SkinTone = SkinTone;
//# sourceMappingURL=SkinTone.js.map