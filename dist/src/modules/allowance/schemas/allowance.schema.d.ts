import { Document } from 'mongoose';
export type AllowanceDocument = Allowance & Document;
export declare class Allowance {
    name: string;
    code: string;
    description: string;
    type: 'fixed' | 'percentage' | 'variable';
    amount: number;
    percentage: number;
    isTaxable: boolean;
    isActive: boolean;
}
export declare const AllowanceSchema: import("mongoose").Schema<Allowance, import("mongoose").Model<Allowance, any, any, any, Document<unknown, any, Allowance, any, {}> & Allowance & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Allowance, Document<unknown, {}, import("mongoose").FlatRecord<Allowance>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Allowance> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
