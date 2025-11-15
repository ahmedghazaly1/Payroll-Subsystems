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
exports.CreatePayrollPolicyDto = exports.TaxPolicyDto = exports.BonusPolicyDto = exports.LeaveEncashmentPolicyDto = exports.OvertimePolicyDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class OvertimePolicyDto {
    enabled;
    multiplier;
    dailyLimit;
    weeklyLimit;
}
exports.OvertimePolicyDto = OvertimePolicyDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], OvertimePolicyDto.prototype, "enabled", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(3),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], OvertimePolicyDto.prototype, "multiplier", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], OvertimePolicyDto.prototype, "dailyLimit", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], OvertimePolicyDto.prototype, "weeklyLimit", void 0);
class LeaveEncashmentPolicyDto {
    enabled;
    encashmentPercentage;
    maxEncashableDays;
}
exports.LeaveEncashmentPolicyDto = LeaveEncashmentPolicyDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], LeaveEncashmentPolicyDto.prototype, "enabled", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], LeaveEncashmentPolicyDto.prototype, "encashmentPercentage", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], LeaveEncashmentPolicyDto.prototype, "maxEncashableDays", void 0);
class BonusPolicyDto {
    type;
    amount;
    isPercentage;
    percentage;
}
exports.BonusPolicyDto = BonusPolicyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], BonusPolicyDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BonusPolicyDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], BonusPolicyDto.prototype, "isPercentage", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], BonusPolicyDto.prototype, "percentage", void 0);
class TaxPolicyDto {
    taxRegime;
    includeInTaxCalculation;
    taxExemptComponents;
}
exports.TaxPolicyDto = TaxPolicyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TaxPolicyDto.prototype, "taxRegime", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], TaxPolicyDto.prototype, "includeInTaxCalculation", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], TaxPolicyDto.prototype, "taxExemptComponents", void 0);
class CreatePayrollPolicyDto {
    name;
    description;
    policyCode;
    isActive;
    effectiveDate;
    expirationDate;
    overtimePolicy;
    leaveEncashmentPolicy;
    bonusPolicy;
    taxPolicy;
    allowances;
    deductions;
    insurance;
    applicablePayGrades;
    approvalWorkflowId;
    additionalConfig;
}
exports.CreatePayrollPolicyDto = CreatePayrollPolicyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePayrollPolicyDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePayrollPolicyDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePayrollPolicyDto.prototype, "policyCode", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreatePayrollPolicyDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePayrollPolicyDto.prototype, "effectiveDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreatePayrollPolicyDto.prototype, "expirationDate", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => OvertimePolicyDto),
    __metadata("design:type", OvertimePolicyDto)
], CreatePayrollPolicyDto.prototype, "overtimePolicy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => LeaveEncashmentPolicyDto),
    __metadata("design:type", LeaveEncashmentPolicyDto)
], CreatePayrollPolicyDto.prototype, "leaveEncashmentPolicy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => BonusPolicyDto),
    __metadata("design:type", BonusPolicyDto)
], CreatePayrollPolicyDto.prototype, "bonusPolicy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => TaxPolicyDto),
    __metadata("design:type", TaxPolicyDto)
], CreatePayrollPolicyDto.prototype, "taxPolicy", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePayrollPolicyDto.prototype, "allowances", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePayrollPolicyDto.prototype, "deductions", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePayrollPolicyDto.prototype, "insurance", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreatePayrollPolicyDto.prototype, "applicablePayGrades", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePayrollPolicyDto.prototype, "approvalWorkflowId", void 0);
__decorate([
    (0, class_validator_1.IsObject)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePayrollPolicyDto.prototype, "additionalConfig", void 0);
//# sourceMappingURL=create-payroll-policy.dto.js.map