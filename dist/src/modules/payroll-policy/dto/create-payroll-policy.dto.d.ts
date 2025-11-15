export declare class OvertimePolicyDto {
    enabled?: boolean;
    multiplier?: number;
    dailyLimit?: number;
    weeklyLimit?: number;
}
export declare class LeaveEncashmentPolicyDto {
    enabled?: boolean;
    encashmentPercentage?: number;
    maxEncashableDays?: number;
}
export declare class BonusPolicyDto {
    type?: string;
    amount?: number;
    isPercentage?: boolean;
    percentage?: number;
}
export declare class TaxPolicyDto {
    taxRegime?: string;
    includeInTaxCalculation?: boolean;
    taxExemptComponents?: string[];
}
export declare class CreatePayrollPolicyDto {
    name: string;
    description?: string;
    policyCode?: string;
    isActive?: boolean;
    effectiveDate?: Date;
    expirationDate?: Date;
    overtimePolicy?: OvertimePolicyDto;
    leaveEncashmentPolicy?: LeaveEncashmentPolicyDto;
    bonusPolicy?: BonusPolicyDto;
    taxPolicy?: TaxPolicyDto;
    allowances?: {
        [key: string]: {
            enabled: boolean;
            amount?: number;
            isTaxable: boolean;
            calculationType?: 'fixed' | 'percentage';
            percentageOf?: string;
        };
    };
    deductions?: {
        [key: string]: {
            enabled: boolean;
            amount?: number;
            isTaxExempt: boolean;
            calculationType?: 'fixed' | 'percentage';
            percentageOf?: string;
            maxLimit?: number;
        };
    };
    insurance?: {
        enabled: boolean;
        provider?: string;
        employeeContribution?: number;
        employerContribution?: number;
        maxCoverage?: number;
    };
    applicablePayGrades?: string[];
    approvalWorkflowId?: string;
    additionalConfig?: Record<string, any>;
}
