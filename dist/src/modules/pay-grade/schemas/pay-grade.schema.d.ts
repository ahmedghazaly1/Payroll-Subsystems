import { Document } from 'mongoose';
export type PayGradeDocument = PayGrade & Document;
export declare class PayGrade {
    name: string;
    code: string;
    description: string;
    minSalary: number;
    maxSalary: number;
    benefits: string[];
    isActive: boolean;
}
export declare const PayGradeSchema: import("mongoose").Schema<PayGrade, import("mongoose").Model<PayGrade, any, any, any, Document<unknown, any, PayGrade, any, {}> & PayGrade & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PayGrade, Document<unknown, {}, import("mongoose").FlatRecord<PayGrade>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<PayGrade> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
