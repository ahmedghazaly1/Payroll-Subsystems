import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { AllowanceDocument } from '../../allowance/schemas/allowance.schema';
export type TaxRuleDocument = TaxRule & Document;
export declare class TaxRule {
    country: string;
    state: string;
    taxBrackets: {
        minIncome: number;
        maxIncome: number;
        rate: number;
    }[];
    standardDeduction: number;
    exemptedAllowances: mongoose.Types.ObjectId[] | AllowanceDocument[];
    isActive: boolean;
}
export declare const TaxRuleSchema: mongoose.Schema<TaxRule, mongoose.Model<TaxRule, any, any, any, Document<unknown, any, TaxRule, any, {}> & TaxRule & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, TaxRule, Document<unknown, {}, mongoose.FlatRecord<TaxRule>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<TaxRule> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
