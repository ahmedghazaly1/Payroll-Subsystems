import { PartialType } from '@nestjs/mapped-types';
import { 
  CreatePayrollPolicyDto, 
  OvertimePolicyDto, 
  LeaveEncashmentPolicyDto, 
  BonusPolicyDto, 
  TaxPolicyDto 
} from './create-payroll-policy.dto';
import { IsOptional, IsArray, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// Partial types for nested DTOs
class UpdateOvertimePolicyDto extends PartialType(OvertimePolicyDto) {}
class UpdateLeaveEncashmentPolicyDto extends PartialType(LeaveEncashmentPolicyDto) {}
class UpdateBonusPolicyDto extends PartialType(BonusPolicyDto) {}
class UpdateTaxPolicyDto extends PartialType(TaxPolicyDto) {}

export class UpdatePayrollPolicyDto extends PartialType(CreatePayrollPolicyDto) {
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  applicablePayGrades?: string[];

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateOvertimePolicyDto)
  overtimePolicy?: UpdateOvertimePolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateLeaveEncashmentPolicyDto)
  leaveEncashmentPolicy?: UpdateLeaveEncashmentPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateBonusPolicyDto)
  bonusPolicy?: UpdateBonusPolicyDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => UpdateTaxPolicyDto)
  taxPolicy?: UpdateTaxPolicyDto;
}