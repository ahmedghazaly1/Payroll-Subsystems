import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Allowance, AllowanceSchema } from './schemas/allowance.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Allowance.name, schema: AllowanceSchema }
    ])
  ]
})
export class AllowanceModule {}
