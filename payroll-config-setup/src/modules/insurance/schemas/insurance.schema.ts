import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InsuranceDocument = Insurance & Document;

@Schema({ timestamps: true })
export class Insurance {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop()
  description: string;

  @Prop({ type: Number, required: true })
  employeeContribution: number;

  @Prop({ type: Number, required: true })
  employerContribution: number;

  @Prop({ default: true })
  isActive: boolean;
}

export const InsuranceSchema = SchemaFactory.createForClass(Insurance);