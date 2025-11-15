"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TerminationBenefitSchema = exports.TerminationBenefit = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = __importStar(require("mongoose"));
let TerminationBenefit = class TerminationBenefit {
    employeeId;
    separationType;
    finalWorkingDate;
    benefitAmount;
    unpaidLeaveDays;
    encashmentAmount;
    approvalStatus;
    approvedBy;
    processedInPayroll;
    createdBy;
};
exports.TerminationBenefit = TerminationBenefit;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true }),
    __metadata("design:type", Object)
], TerminationBenefit.prototype, "employeeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['RESIGNATION', 'TERMINATION'] }),
    __metadata("design:type", String)
], TerminationBenefit.prototype, "separationType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], TerminationBenefit.prototype, "finalWorkingDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], TerminationBenefit.prototype, "benefitAmount", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TerminationBenefit.prototype, "unpaidLeaveDays", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], TerminationBenefit.prototype, "encashmentAmount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: ['PENDING', 'APPROVED', 'REJECTED'] }),
    __metadata("design:type", String)
], TerminationBenefit.prototype, "approvalStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TerminationBenefit.prototype, "approvedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], TerminationBenefit.prototype, "processedInPayroll", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], TerminationBenefit.prototype, "createdBy", void 0);
exports.TerminationBenefit = TerminationBenefit = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], TerminationBenefit);
exports.TerminationBenefitSchema = mongoose_1.SchemaFactory.createForClass(TerminationBenefit);
//# sourceMappingURL=termination-benefit.schema.js.map