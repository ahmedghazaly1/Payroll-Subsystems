import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PayrollPolicyDocument = PayrollPolicy & Document;

@Schema({ timestamps: true })
export class PayrollPolicy {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop()
  description: string;

  @Prop({ type: Object })
  policyConfig: {
    overtimeRate: number;
    includesTaxDeductions: boolean;
    includesSocialSecurity: boolean;
    allowanceTypes: string[];
    workingHoursPerDay: number;
    workingDaysPerWeek: number;
  };

  @Prop({ default: true })
  isActive: boolean;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const PayrollPolicySchema = SchemaFactory.createForClass(PayrollPolicy);