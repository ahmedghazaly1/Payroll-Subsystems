import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SystemSettings, SystemSettingsSchema } from './schemas/system-settings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SystemSettings.name, schema: SystemSettingsSchema }
    ])
  ]
})
export class SystemSettingsModule {}
