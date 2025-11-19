import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PayrollConfigurationModule } from './payroll-configuration/payroll-configuration.module';
import { PayrollProcessingAndExecutionModule } from './payroll-processing-and-execution/payroll-processing-and-execution.module';
import { PayrollTrackingModule } from './payroll-tracking/payroll-tracking.module';



@Module({
  imports: [
    // Load environment variables from .env (global = available everywhere)
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Connect to MongoDB Atlas using MONGO_URI from .env
    MongooseModule.forRoot(
      process.env.MONGODB_URI ||
        'mongodb+srv://TeamUser:TeamUser@cluster0.mfclf62.mongodb.net/hr_system', //zawedt esm el db
      {
        // optional: you can add options here if needed
      },
    ),
      PayrollConfigurationModule,
    PayrollProcessingAndExecutionModule,
    PayrollTrackingModule,
  ],
})
export class AppModule {}