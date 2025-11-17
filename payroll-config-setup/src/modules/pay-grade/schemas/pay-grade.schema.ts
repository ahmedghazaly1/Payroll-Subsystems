import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PayGradeDocument = PayGrade & Document;

@Schema({ timestamps: true })
export class PayGrade {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop()
  description: string;

  @Prop({ type: Number, required: true })
  minSalary: number;

  @Prop({ type: Number, required: true })
  maxSalary: number;

  @Prop({ type: [String] })
  benefits: string[];

  @Prop({ default: true })
  isActive: boolean;
}

export const PayGradeSchema = SchemaFactory.createForClass(PayGrade);