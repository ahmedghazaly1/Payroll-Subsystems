import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PayrollPoliciesService } from './payroll-policy.service';
import { PayrollPoliciesController } from './payroll-policy.controller';
import { PayrollPolicy, PayrollPolicySchema } from './schemas/payroll-policy.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PayrollPolicy.name, schema: PayrollPolicySchema }
    ])
  ],
  controllers: [PayrollPoliciesController],
  providers: [PayrollPoliciesService],
  exports: [PayrollPoliciesService]
})
export class PayrollPoliciesModule {}