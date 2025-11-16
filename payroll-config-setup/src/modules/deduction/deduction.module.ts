import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Deduction, DeductionSchema } from './schemas/deduction.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Deduction.name, schema: DeductionSchema }
    ])
  ]
})
export class DeductionModule {}

