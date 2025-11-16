import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaxRule, TaxRuleSchema } from './schemas/tax-rule.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TaxRule.name, schema: TaxRuleSchema }
    ])
  ]
})
export class TaxRuleModule {}
