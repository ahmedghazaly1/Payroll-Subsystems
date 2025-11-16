import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApprovalWorkflow, ApprovalWorkflowSchema } from './schemas/approval-workflow.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ApprovalWorkflow.name, schema: ApprovalWorkflowSchema }
    ])
  ]
})
export class ApprovalWorkflowModule {}
