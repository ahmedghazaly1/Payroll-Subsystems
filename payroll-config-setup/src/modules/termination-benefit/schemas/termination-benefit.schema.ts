// src/modules/termination-benefit/schemas/termination-benefit.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type TerminationBenefitDocument = TerminationBenefit & Document;

// Employee Document type - update import path when Employee schema is available
// Example: import { EmployeeDocument } from '../../employee/schemas/employee.schema';
type EmployeeDocument = Document & { _id: mongoose.Types.ObjectId };

@Schema({ timestamps: true })
export class TerminationBenefit {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true })
  employeeId: mongoose.Types.ObjectId | EmployeeDocument;

  @Prop({ required: true, enum: ['RESIGNATION', 'TERMINATION'] })
  separationType: string;

  @Prop({ required: true })
  finalWorkingDate: Date;

  @Prop({ required: true })
  benefitAmount: number;

  @Prop()
  unpaidLeaveDays: number;

  @Prop()
  encashmentAmount: number;

  @Prop({ required: true, enum: ['PENDING', 'APPROVED', 'REJECTED'] })
  approvalStatus: string;

  @Prop()
  approvedBy: string;

  @Prop()
  processedInPayroll: boolean;

  @Prop()
  createdBy: string;
}

export const TerminationBenefitSchema = SchemaFactory.createForClass(TerminationBenefit);