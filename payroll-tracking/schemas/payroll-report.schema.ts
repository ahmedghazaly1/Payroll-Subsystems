// SubSystem: Payroll Tracking, Transparency & Employee Self-Service
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

import { PayrollRunDocument } from '../../payroll-processing/schemas/payroll-run.schema';
// import { DepartmentDocument } from '../../org-structure/schemas/department.schema'; // if you have it

export type PayrollReportDocument = PayrollReport & Document;

@Schema({ timestamps: true })
export class PayrollReport {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PayrollRun',
    required: true,
  })
  payrollRunId:
    | mongoose.Types.ObjectId
    | PayrollRunDocument; // from Payroll Processing & Execution subSystem

  @Prop({ required: true })
  periodCode: string; // e.g. "2025-10"

  @Prop()
  reportType:
    | 'department_summary'
    | 'tax_summary'
    | 'insurance_summary'
    | 'benefits_summary';

  /*@Prop({
    type: [
      {
        departmentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Department',
        },
        departmentName: String,
        totalGross: Number,
        totalNet: Number,
        totalTax: Number,
        totalInsurance: Number,
      },
    ],
    default: [],
  })
  departmentSummaries?: {
    departmentId:
      | mongoose.Types.ObjectId
      | any; // DepartmentDocument if you import it

    departmentName: string;
    totalGross: number;
    totalNet: number;
    totalTax: number;
    totalInsurance: number;
  }[];
*/
  @Prop({ type: Object })
  rawDataSnapshot?: any; // for flexible reporting
}

export const PayrollReportSchema =
  SchemaFactory.createForClass(PayrollReport);