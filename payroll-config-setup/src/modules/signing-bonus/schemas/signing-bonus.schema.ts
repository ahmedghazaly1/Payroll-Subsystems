import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SigningBonusDocument = SigningBonus & Document;

@Schema({ timestamps: true })
export class SigningBonus {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  amount: number;

  @Prop()
  description: string;

  @Prop({ type: String })
  eligibility: 'all' | 'specific_roles';

  @Prop({ type: [String] })
  eligibleRoles: string[];

  @Prop({ default: true })
  isActive: boolean;
}

export const SigningBonusSchema = SchemaFactory.createForClass(SigningBonus);