// SubSystem: Payroll Tracking, Transparency & Employee Self-Service

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { PayslipDocument } from './payslip.schema';
import { PayrollRunDocument } from '../../payroll-processing/schemas/payroll-run.schema';
// import { UserDocument } from '../../auth/schemas/user.schema'; // if you have it
// import { EmployeeDocument } from '../../employee/schemas/employee.schema'; // if needed

export type PayrollDisputeDocument = PayrollDispute & Document;

@Schema({ timestamps: true })
export class PayrollDispute {
  // ------------------------------------------------------------
  // (Optional) Employee ref — you commented it out but I’ll keep
  // the converted version here in case you want it later:
  // ------------------------------------------------------------

  /*
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  })
  employeeId:
    | mongoose.Types.ObjectId
    | EmployeeDocument;

  @Prop({ required: true })
  employeeName: string;
  */

  // ------------------------------------------------------------
  // REQUIRED REFERENCES
  // ------------------------------------------------------------

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Payslip',
    required: true,
  })
  payslipId:
    | mongoose.Types.ObjectId
    | PayslipDocument;

  // ------------------------------------------------------------
  // SNAPSHOT DATA
  // ------------------------------------------------------------

  @Prop({ required: true })
  payrollPeriodCode: string; // e.g. "2025-10"

  // ------------------------------------------------------------
  // DISPUTE DETAILS
  // ------------------------------------------------------------

  @Prop({
    required: true,
    enum: [
      'salary_calculation',
      'deduction_error',
      'missing_allowance',
      'bonus_issue',
      'tax_insurance_issue',
      'other',
    ],
  })
  disputeType:
    | 'salary_calculation'
    | 'deduction_error'
    | 'missing_allowance'
    | 'bonus_issue'
    | 'tax_insurance_issue'
    | 'other';

  @Prop({ required: true })
  description: string;

  @Prop()
  expectedAmount?: number;

  @Prop()
  actualAmount?: number;

  @Prop()
  differenceAmount?: number;

  @Prop({
    type: [String],
    default: [],
  })
  attachments: string[];

  // ------------------------------------------------------------
  // WORKFLOW STATUS
  // ------------------------------------------------------------

  @Prop({
    required: true,
    enum: ['submitted', 'under_review', 'approved', 'rejected'],
    default: 'submitted',
  })
  status:
    | 'submitted'
    | 'under_review'
    | 'approved'
    | 'rejected';

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  reviewedBy?:
    | mongoose.Types.ObjectId
    | any; // UserDocument

  @Prop()
  reviewComment?: string;

  // ------------------------------------------------------------
  // REFUND PROCESSING
  // ------------------------------------------------------------

  @Prop({ default: false })
  isRefundRequired: boolean;

  @Prop({ default: false })
  isRefundProcessed: boolean;

  @Prop()
  refundProcessedAt?: Date;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PayrollRun',
  })
  refundPayrollRunId?:
    | mongoose.Types.ObjectId
    | PayrollRunDocument;
}

export const PayrollDisputeSchema =
  SchemaFactory.createForClass(PayrollDispute);
