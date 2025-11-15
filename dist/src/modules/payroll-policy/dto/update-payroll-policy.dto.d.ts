import { CreatePayrollPolicyDto, OvertimePolicyDto, LeaveEncashmentPolicyDto, BonusPolicyDto, TaxPolicyDto } from './create-payroll-policy.dto';
declare const UpdateOvertimePolicyDto_base: import("@nestjs/mapped-types").MappedType<Partial<OvertimePolicyDto>>;
declare class UpdateOvertimePolicyDto extends UpdateOvertimePolicyDto_base {
}
declare const UpdateLeaveEncashmentPolicyDto_base: import("@nestjs/mapped-types").MappedType<Partial<LeaveEncashmentPolicyDto>>;
declare class UpdateLeaveEncashmentPolicyDto extends UpdateLeaveEncashmentPolicyDto_base {
}
declare const UpdateBonusPolicyDto_base: import("@nestjs/mapped-types").MappedType<Partial<BonusPolicyDto>>;
declare class UpdateBonusPolicyDto extends UpdateBonusPolicyDto_base {
}
declare const UpdateTaxPolicyDto_base: import("@nestjs/mapped-types").MappedType<Partial<TaxPolicyDto>>;
declare class UpdateTaxPolicyDto extends UpdateTaxPolicyDto_base {
}
declare const UpdatePayrollPolicyDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePayrollPolicyDto>>;
export declare class UpdatePayrollPolicyDto extends UpdatePayrollPolicyDto_base {
    applicablePayGrades?: string[];
    overtimePolicy?: UpdateOvertimePolicyDto;
    leaveEncashmentPolicy?: UpdateLeaveEncashmentPolicyDto;
    bonusPolicy?: UpdateBonusPolicyDto;
    taxPolicy?: UpdateTaxPolicyDto;
}
export {};
