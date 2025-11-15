import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type ApprovalWorkflowDocument = ApprovalWorkflow & Document;
export declare class ApprovalWorkflow {
    entityType: string;
    entityId: mongoose.Types.ObjectId;
    currentApprover: string;
    status: string;
    comments: string;
    approvedBy: string;
    approvedAt: Date;
    createdBy: string;
}
export declare const ApprovalWorkflowSchema: mongoose.Schema<ApprovalWorkflow, mongoose.Model<ApprovalWorkflow, any, any, any, Document<unknown, any, ApprovalWorkflow, any, {}> & ApprovalWorkflow & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ApprovalWorkflow, Document<unknown, {}, mongoose.FlatRecord<ApprovalWorkflow>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<ApprovalWorkflow> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
