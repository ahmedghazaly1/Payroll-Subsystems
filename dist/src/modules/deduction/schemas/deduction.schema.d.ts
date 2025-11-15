import { Document } from 'mongoose';
export type DeductionDocument = Deduction & Document;
export declare class Deduction {
    name: string;
    code: string;
    description: string;
    type: 'fixed' | 'percentage' | 'variable';
    amount: number;
    percentage: number;
    isActive: boolean;
}
export declare const DeductionSchema: import("mongoose").Schema<Deduction, import("mongoose").Model<Deduction, any, any, any, Document<unknown, any, Deduction, any, {}> & Deduction & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Deduction, Document<unknown, {}, import("mongoose").FlatRecord<Deduction>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Deduction> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
