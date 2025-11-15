// SubSystem: Payroll Tracking, Transparency & Employee Self-Service

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { PayrollRunDocument } from '../../payroll-processing/schemas/payroll-run.schema';
// import { EmployeeDocument } from '../../employee/schemas/employee.schema'; // if available
// import { UserDocument } from '../../auth/schemas/user.schema'; // optional

export type ReimbursementClaimDocument = ReimbursementClaim & Document;

@Schema({ timestamps: true })
export class ReimbursementClaim {
  // ------------------------------------------------------------
  // EMPLOYEE (REFERENCE)
  // ------------------------------------------------------------

  /*@Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  })
  employeeId:
    | mongoose.Types.ObjectId
    | any; // EmployeeDocument if you add it later
*/

/*
  @Prop({ required: true })
  employeeName: string; // denormalized for quick UI lookup

  // ------------------------------------------------------------
  // CLAIM INFO
  // ------------------------------------------------------------
*/
  @Prop({ required: true })
  claimType: string; // e.g., "travel", "medical"

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  description: string;

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
    | any; // UserDocument if available

  @Prop()
  reviewComment?: string;

  // ------------------------------------------------------------
  // REFUND PROCESSING INFO
  // ------------------------------------------------------------

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

export const ReimbursementClaimSchema =
  SchemaFactory.createForClass(ReimbursementClaim);