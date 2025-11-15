import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaxRuleDocument = TaxRule & Document;

@Schema({ timestamps: true })
export class TaxRule {
  @Prop({ required: true })
  country: string;

  @Prop({ required: true })
  state: string;

  @Prop({ type: [Object] })
  taxBrackets: {
    minIncome: number;
    maxIncome: number;
    rate: number;
  }[];

  @Prop({ type: Number })
  standardDeduction: number;

  @Prop({ type: [String] })
  exemptedAllowances: string[];

  @Prop({ default: true })
  isActive: boolean;
}

export const TaxRuleSchema = SchemaFactory.createForClass(TaxRule);