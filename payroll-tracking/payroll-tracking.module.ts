import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Payslip, PayslipSchema } from './schemas/payslip.schema';
import {
  PayrollDispute,
  PayrollDisputeSchema,
} from './schemas/payroll-dispute.schema';
import {
  ReimbursementClaim,
  ReimbursementClaimSchema,
} from './schemas/reimbursement-claim.schema';
import {
  PayrollReport,
  PayrollReportSchema,
} from './schemas/payroll-report.schema';
import { PayrollTrackingService } from './payroll-tracking.service';
import { PayrollTrackingController } from './payroll-tracking.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Payslip.name, schema: PayslipSchema },
      { name: PayrollDispute.name, schema: PayrollDisputeSchema },
      { name: ReimbursementClaim.name, schema: ReimbursementClaimSchema },
      { name: PayrollReport.name, schema: PayrollReportSchema },
    ]),
  ],
  controllers: [PayrollTrackingController],
  providers: [PayrollTrackingService],
  exports: [MongooseModule, PayrollTrackingService],
})
export class PayrollTrackingModule {}
