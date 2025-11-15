import { Document } from 'mongoose';
export type PayrollPolicyDocument = PayrollPolicy & Document;
export declare class PayrollPolicy {
    name: string;
    code: string;
    description: string;
    policyConfig: {
        overtimeRate: number;
        includesTaxDeductions: boolean;
        includesSocialSecurity: boolean;
        allowanceTypes: string[];
        workingHoursPerDay: number;
        workingDaysPerWeek: number;
    };
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PayrollPolicySchema: import("mongoose").Schema<PayrollPolicy, import("mongoose").Model<PayrollPolicy, any, any, any, Document<unknown, any, PayrollPolicy, any, {}> & PayrollPolicy & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PayrollPolicy, Document<unknown, {}, import("mongoose").FlatRecord<PayrollPolicy>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<PayrollPolicy> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
