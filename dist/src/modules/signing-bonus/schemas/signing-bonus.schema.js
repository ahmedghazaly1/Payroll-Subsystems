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
exports.SigningBonusSchema = exports.SigningBonus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let SigningBonus = class SigningBonus {
    name;
    amount;
    description;
    eligibility;
    eligibleRoles;
    isActive;
};
exports.SigningBonus = SigningBonus;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SigningBonus.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], SigningBonus.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SigningBonus.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], SigningBonus.prototype, "eligibility", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Array)
], SigningBonus.prototype, "eligibleRoles", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], SigningBonus.prototype, "isActive", void 0);
exports.SigningBonus = SigningBonus = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], SigningBonus);
exports.SigningBonusSchema = mongoose_1.SchemaFactory.createForClass(SigningBonus);
//# sourceMappingURL=signing-bonus.schema.js.map