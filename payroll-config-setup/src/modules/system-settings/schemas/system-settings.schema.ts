// src/modules/system-settings/schemas/system-settings.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SystemSettingsDocument = SystemSettings & Document;

@Schema({ timestamps: true })
export class SystemSettings {
  @Prop({ required: true, unique: true })
  settingKey: string;

  @Prop({ required: true })
  settingValue: any;

  @Prop()
  description: string;

  @Prop({ required: true, enum: ['PENDING', 'APPROVED', 'REJECTED'] })
  approvalStatus: string;

  @Prop()
  approvedBy: string; // Payroll Manager

  @Prop()
  createdBy: string; // System Admin
}

export const SystemSettingsSchema = SchemaFactory.createForClass(SystemSettings);