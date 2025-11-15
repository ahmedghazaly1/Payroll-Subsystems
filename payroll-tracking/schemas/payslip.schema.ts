// SubSystem: Payroll Tracking, Transparency & Employee Self-Service
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { PayrollRunDocument } from '../../payroll-processing/schemas/payroll-run.schema';
import { PayrollRunItemDocument } from '../../payroll-processing/schemas/payroll-run-item.schema';
// You will have EmployeeDocument in your Employee Profile module
// import { EmployeeDocument } from '../../employee/schemas/employee.schema';

export type PayslipDocument = Payslip & Document;

@Schema({ timestamps: true })
export class Payslip {
  // ------------------------------------------------------------
  // REFERENCES (Using ObjectId | Document)
  // ------------------------------------------------------------

  /*@Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  })
  employeeId:
    | mongoose.Types.ObjectId
    | any; // EmployeeDocument (from Employee subsystem)
*/
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PayrollRun',
    required: true,
  })
  payrollRunId:
    | mongoose.Types.ObjectId
    | PayrollRunDocument;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PayrollRunItem',
    required: true,
  })
  payrollRunItemId:
    | mongoose.Types.ObjectId
    | PayrollRunItemDocument;

  // ------------------------------------------------------------
  // SNAPSHOT FIELDS (Stored permanently for history)
  // ------------------------------------------------------------

  @Prop({ required: true })
  periodCode: string; // Example: "2025-10"

  @Prop({ required: true })
  baseSalary: number; // snapshot from PayGrade at time of payroll

  @Prop({ required: true })
  grossSalary: number;

  @Prop({ required: true })
  totalAllowances: number;

  @Prop({ required: true })
  totalDeductions: number;

  @Prop({ required: true })
  finalNetSalary: number;

  // ------------------------------------------------------------
  // ITEMIZED COMPONENTS (Allowances, Deductions, Bonuses...)
  // ------------------------------------------------------------

  @Prop({
    type: [
      {
        code: String,
        name: String,
        type: String,
        amount: Number,
      },
    ],
    default: [],
  })
  itemizedComponents: {
    code: string;
    name: string;
    type: string; // "allowance" | "deduction" | "earning" | "bonus" | "benefit"
    amount: number;
  }[];

  // ------------------------------------------------------------
  // VISIBILITY STATUS
  // ------------------------------------------------------------

  @Prop({
    required: true,
    enum: ['generated', 'visible_to_employee', 'locked'],
  })
  visibilityStatus:
    | 'generated'
    | 'visible_to_employee'
    | 'locked';
}

export const PayslipSchema = SchemaFactory.createForClass(Payslip);