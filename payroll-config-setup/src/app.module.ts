import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { PayrollPoliciesModule } from './modules/payroll-policy/payroll-policy.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.DATABASE_URL || 'mongodb://localhost:27017/payroll-config'
    ),
    PayrollPoliciesModule,
  ],
})
export class AppModule {}