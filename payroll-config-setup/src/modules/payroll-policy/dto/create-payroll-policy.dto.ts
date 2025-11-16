import { IsString, IsNotEmpty, IsObject, IsOptional, IsBoolean, IsDateString, IsArray, ValidateNested, IsNumber, Min, Max, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export class OvertimePolicyDto {
  @IsBoolean()
  @IsOptional()
  enabled?: boolean;

  @IsNumber()
  @Min(1)
  @Max(3)
  @IsOptional()
  multiplier?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  dailyLimit?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  weeklyLimit?: number;
}

export class LeaveEncashmentPolicyDto {
  @IsBoolean()
  @IsOptional()
  enabled?: boolean;

  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  encashmentPercentage?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  maxEncashableDays?: number;
}

export class BonusPolicyDto {
  @IsString()
  @IsOptional()
  type?: string; // 'festival', 'performance', 'annual'

  @IsNumber()
  @Min(0)
  @IsOptional()
  amount?: number;

  @IsBoolean()
  @IsOptional()
  isPercentage?: boolean;

  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  percentage?: number;
}

export class TaxPolicyDto {
  @IsString()
  @IsOptional()
  taxRegime?: string; // 'old', 'new'

  @IsBoolean()
  @IsOptional()
  includeInTaxCalculation?: boolean;

  @IsArray()
  @IsOptional()
  taxExemptComponents?: string[];
}

export class CreatePayrollPolicyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  policyCode?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsDateString()
  @IsOptional()
  effectiveDate?: Date;

  @IsDateString()
  @IsOptional()
  expirationDate?: Date;

  // Overtime Policy
  @IsOptional()
  @ValidateNested()
  @Type(() => OvertimePolicyDto)
  overtimePolicy?: OvertimePolicyDto;

  // Leave Encashment Policy
  @IsOptional()
  @ValidateNested()
  @Type(() => LeaveEncashmentPolicyDto)
  leaveEncashmentPolicy?: LeaveEncashmentPolicyDto;

  // Bonus Policy
  @IsOptional()
  @ValidateNested()
  @Type(() => BonusPolicyDto)
  bonusPolicy?: BonusPolicyDto;

  // Tax Policy
  @IsOptional()
  @ValidateNested()
  @Type(() => TaxPolicyDto)
  taxPolicy?: TaxPolicyDto;

  // Allowances configuration
  @IsObject()
  @IsOptional()
  allowances?: {
    [key: string]: {
      enabled: boolean;
      amount?: number;
      isTaxable: boolean;
      calculationType?: 'fixed' | 'percentage';
      percentageOf?: string;
    };
  };

  // Deductions configuration
  @IsObject()
  @IsOptional()
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

  // Insurance configuration
  @IsObject()
  @IsOptional()
  insurance?: {
    enabled: boolean;
    provider?: string;
    employeeContribution?: number;
    employerContribution?: number;
    maxCoverage?: number;
  };

  // Pay grade linkage
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  applicablePayGrades?: string[];

  // Approval workflow
  @IsString()
  @IsOptional()
  approvalWorkflowId?: string;

  @IsObject()
  @IsOptional()
  additionalConfig?: Record<string, any>;
}