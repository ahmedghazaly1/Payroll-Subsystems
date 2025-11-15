import { Document } from 'mongoose';
export type InsuranceDocument = Insurance & Document;
export declare class Insurance {
    name: string;
    code: string;
    description: string;
    employeeContribution: number;
    employerContribution: number;
    isActive: boolean;
}
export declare const InsuranceSchema: import("mongoose").Schema<Insurance, import("mongoose").Model<Insurance, any, any, any, Document<unknown, any, Insurance, any, {}> & Insurance & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Insurance, Document<unknown, {}, import("mongoose").FlatRecord<Insurance>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Insurance> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
