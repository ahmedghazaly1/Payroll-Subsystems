import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminationBenefit, TerminationBenefitSchema } from './schemas/termination-benefit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TerminationBenefit.name, schema: TerminationBenefitSchema }
    ])
  ]
})
export class TerminationBenefitModule {}
