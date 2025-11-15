import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type TerminationBenefitDocument = TerminationBenefit & Document;
type EmployeeDocument = Document & {
    _id: mongoose.Types.ObjectId;
};
export declare class TerminationBenefit {
    employeeId: mongoose.Types.ObjectId | EmployeeDocument;
    separationType: string;
    finalWorkingDate: Date;
    benefitAmount: number;
    unpaidLeaveDays: number;
    encashmentAmount: number;
    approvalStatus: string;
    approvedBy: string;
    processedInPayroll: boolean;
    createdBy: string;
}
export declare const TerminationBenefitSchema: mongoose.Schema<TerminationBenefit, mongoose.Model<TerminationBenefit, any, any, any, Document<unknown, any, TerminationBenefit, any, {}> & TerminationBenefit & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, TerminationBenefit, Document<unknown, {}, mongoose.FlatRecord<TerminationBenefit>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<TerminationBenefit> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export {};
