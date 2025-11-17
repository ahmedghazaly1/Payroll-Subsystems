// src/payroll-processing/schemas/payslip.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

 import { EmployeeDocument } from '../../employee/schemas/employee.schema';

export type PayslipDocument = Payslip & Document;

@Schema({ timestamps: true })
export class Payslip {
  @Prop({ required: true, unique: true })
  payslipNumber: string; // e.g. "2025-10-EMP001"

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  })
  employeeId: mongoose.Types.ObjectId | any; // from Employee Profile

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PayrollRun',
    required: true,
  })
  payrollRunId: mongoose.Types.ObjectId | any; // from Payroll Processing

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PayrollPeriod',
    required: true,
  })
  payrollPeriodId: mongoose.Types.ObjectId | any; // from Payroll Processing

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PayrollRunItem',
    required: true,
  })
  payrollRunItemId: mongoose.Types.ObjectId | any; // from Payroll Processing

  // snapshot info to make the payslip self-contained
  @Prop()
  employeeCode?: string;

  @Prop()
  employeeName?: string;

  @Prop()
  departmentName?: string;

  @Prop()
  positionName?: string;

  // amounts
  @Prop({ default: 0 })
  grossSalary: number;

  @Prop({ default: 0 })
  totalAllowances: number;

  @Prop({ default: 0 })
  totalDeductions: number;

  @Prop({ default: 0 })
  finalNetSalary: number;

  // itemized breakdown
  @Prop({
    type: [
      {
        code: String,
        name: String,
        type: String, // earning / deduction / info
        amount: Number,
      },
    ],
    default: [],
  })
  items: {
    code: string;
    name: string;
    type: string;
    amount: number;
  }[];

  @Prop({
    enum: ['generated', 'sent', 'viewed', 'cancelled'],
    default: 'generated',
  })
  status: 'generated' | 'sent' | 'viewed' | 'cancelled';
}

export const PayslipSchema = SchemaFactory.createForClass(Payslip);
