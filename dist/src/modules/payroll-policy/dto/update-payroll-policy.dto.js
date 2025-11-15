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
exports.UpdatePayrollPolicyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_payroll_policy_dto_1 = require("./create-payroll-policy.dto");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class UpdateOvertimePolicyDto extends (0, mapped_types_1.PartialType)(create_payroll_policy_dto_1.OvertimePolicyDto) {
}
class UpdateLeaveEncashmentPolicyDto extends (0, mapped_types_1.PartialType)(create_payroll_policy_dto_1.LeaveEncashmentPolicyDto) {
}
class UpdateBonusPolicyDto extends (0, mapped_types_1.PartialType)(create_payroll_policy_dto_1.BonusPolicyDto) {
}
class UpdateTaxPolicyDto extends (0, mapped_types_1.PartialType)(create_payroll_policy_dto_1.TaxPolicyDto) {
}
class UpdatePayrollPolicyDto extends (0, mapped_types_1.PartialType)(create_payroll_policy_dto_1.CreatePayrollPolicyDto) {
    applicablePayGrades;
    overtimePolicy;
    leaveEncashmentPolicy;
    bonusPolicy;
    taxPolicy;
}
exports.UpdatePayrollPolicyDto = UpdatePayrollPolicyDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdatePayrollPolicyDto.prototype, "applicablePayGrades", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateOvertimePolicyDto),
    __metadata("design:type", UpdateOvertimePolicyDto)
], UpdatePayrollPolicyDto.prototype, "overtimePolicy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateLeaveEncashmentPolicyDto),
    __metadata("design:type", UpdateLeaveEncashmentPolicyDto)
], UpdatePayrollPolicyDto.prototype, "leaveEncashmentPolicy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateBonusPolicyDto),
    __metadata("design:type", UpdateBonusPolicyDto)
], UpdatePayrollPolicyDto.prototype, "bonusPolicy", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateTaxPolicyDto),
    __metadata("design:type", UpdateTaxPolicyDto)
], UpdatePayrollPolicyDto.prototype, "taxPolicy", void 0);
//# sourceMappingURL=update-payroll-policy.dto.js.map